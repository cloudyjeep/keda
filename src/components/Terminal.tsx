import { useEffect, useRef, useState } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";

export const useTerminal = () => {
  const terminalRef = useRef(null);
  const term = useRef<Terminal>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    term.current = new Terminal({
      rows: 6,
      cols: 80,
      fontSize: 12,
      theme: {
        background: "#1e1e1e",
        foreground: "#ffffff",
      },
    });

    const fitAddon = new FitAddon();
    term.current.loadAddon(fitAddon);

    term.current.open(terminalRef.current);
    fitAddon.fit();

    term.current.onData((data) => {
      term.current?.write(data);
    });

    setReady(true);

    return () => {
      term.current?.dispose();
    };
  }, []);

  return {
    ready,
    term,
    component: (
      <div
        ref={terminalRef}
        className="bg-[rgb(30,30,30)] px-2 py-2 min-h-40 w-full !text-xs"
      />
    ),
  };
};
