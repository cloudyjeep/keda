import { useCallback, useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";

export const useEditor = (height = 240, defaulValue = "") => {
  const [code, setCode] = useState(defaulValue);

  const reset = useCallback(() => setCode(defaulValue), [defaulValue]);

  const mount = useCallback((editor: Parameters<OnMount>[0]) => {
    editor.getAction?.("editor.action.formatDocument")?.run?.();
  }, []);

  return {
    reset: code != defaulValue ? reset : undefined,
    value: code,
    component: (
      <Editor
        height={`${height}px`}
        defaultLanguage="javascript"
        value={code}
        onChange={setCode as any}
        theme="vs-dark"
        options={{
          fontSize: 11,
          lineNumbers: "off",
          minimap: {
            enabled: false,
          },
          tabSize: 2,
        }}
        onMount={mount}
      />
    ),
  };
};
