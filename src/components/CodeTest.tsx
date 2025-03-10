import { useEditor } from "@/components/Editor";
import { useTerminal } from "@/components/Terminal";
import { useEffectDelay } from "@/hooks/global";
import { useTest } from "@/hooks/test";
import React from "react";

interface CodeTestProps {
  height: number;
  no?: number;
  question: string;
  defaultCodeInput: string;
  defaultCodeTest: string;
}

export function CodeTester({
  height,
  no,
  question,
  defaultCodeInput,
  defaultCodeTest,
}: CodeTestProps) {
  const input = useEditor(height, defaultCodeInput);
  const test = useEditor(height, defaultCodeTest);
  const terminal = useTerminal();
  const tester = useTest();

  useEffectDelay(
    () => {
      if (terminal.term.current) {
        terminal.term.current?.clear();
        tester.run(`${input.value}\n${test.value}`, (data) =>
          terminal.term.current?.writeln(data)
        );
      }
    },
    [terminal.ready, input.value, test.value],
    400
  );

  return (
    <div
      className={`space-y-2 p-3 pb-6 rounded border border-gray-100 ${
        tester.success && "bg-green-100"
      }`}
    >
      <div>
        <h2 className="font-medium pb-1 flex gap-3">
          {`✧ Question ${no}`}
          {tester.success && <span>{"✅"}</span>}
        </h2>
        <p className="whitespace-pre-wrap text-xs font-mono pb-1">
          {question.trim()}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 w-full">
        <Section title="Code" reset={input.reset} live>
          {input.component}
        </Section>
        <Section title="Test" reset={test.reset} live>
          {test.component}
        </Section>
      </div>
      <Section title="Result">{terminal.component}</Section>
    </div>
  );
}

const Section = (
  props: React.PropsWithChildren<{
    title: string;
    live?: boolean;
    reset?: () => void;
  }>
) => {
  return (
    <div className="flex-1 min-w-sm max-w-[700px]">
      <h2 className="flex text-xs gap-1 font-medium items-center py-1 px-2 bg-slate-200">
        {props.title}
        {props.live && (
          <span className="font-light opacity-50">{"(live)"}</span>
        )}
        <span className="flex-1" />
        {props.reset && (
          <button
            className="font-light hover:bg-slate-200 bg-slate-100 text-[10px] cursor-pointer px-1 rounded-xs"
            onClick={props.reset}
          >
            {"Reset"}
          </button>
        )}
      </h2>
      {props.children}
    </div>
  );
};
