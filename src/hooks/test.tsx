import { useCallback, useRef, useState } from "react";
import "@/lib/chai.min.js";
import "@/lib/mocha.min.js";

let task = Promise.resolve();

export const useTest = () => {
  const [success, setSuccess] = useState(false);
  const ref = useRef({
    reset: () => {},
  });

  const validate = useCallback(
    (code: string, writter: (data: string) => void, resolve: Function) => {
      const originalConsoleLog = console.log;

      console.log = (...args) => {
        if (args.length) {
          writter(args.map((v) => JSON.stringify(v)).join(", ") + "\n");
        }
        originalConsoleLog(...args);
      };

      const instance = new Mocha({
        ui: "bdd",
        reporter: undefined,
      });

      instance.suite.emit("pre-require", window, null, instance);

      try {
        eval(`var expect = chai.expect;${code}`);

        const runner = instance.run();

        runner.on("suite", function (suite: any) {
          if (suite.title) {
            writter(`Test: ${suite.title}\n`);
          }
        });

        runner.on("pass", (test: any) => {
          writter(`✅ PASSED: ${test.title}`);
        });

        runner.on("fail", (test: any, err: any) => {
          writter(`❌ FAILED: ${test.title}`);
          writter(`   ${err.message}`);
        });

        runner.on("end", () => {
          setSuccess(Boolean(runner.stats?.passes) && !runner.stats?.failures);
          writter(
            `\n🎯 TEST COMPLETED: ${runner.stats?.passes} passed, ${runner.stats?.failures} failed\n\n`
          );
          console.log = originalConsoleLog;
          resolve();
        });

        ref.current.reset();
        ref.current.reset = () => {
          runner.removeAllListeners();
          runner.dispose();
          try {
          } catch (e) {}
        };
      } catch (e: any) {
        writter(` ❗ Error: ${e?.message}\n\n`);
        console.log = originalConsoleLog;
        resolve();
      }
    },
    []
  );

  const run = useCallback(
    (
      code: Parameters<typeof validate>[0],
      writter: Parameters<typeof validate>[1]
    ) => {
      if (!(code || "").trim()) return;
      task = task.then(() => {
        return new Promise((resolve) => {
          validate(code, writter, resolve);
        });
      });
    },
    []
  );

  return {
    success,
    run,
  };
};
