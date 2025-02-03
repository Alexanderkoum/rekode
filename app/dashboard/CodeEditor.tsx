"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Trash2 } from "lucide-react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function RekodeIDE() {
  const [code, setCode] = useState("// Write your code here\nconsole.log('Hello, Rekode!');");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const log = [];
      const consoleLog = console.log;
      console.log = (...args) => log.push(args.join(" "));
      eval(code);
      console.log = consoleLog;
      setOutput(log.join("\n"));
    } catch (error) {
      setOutput(error.toString());
    }
  };

  const clearCode = () => {
    setCode("// Write your code here\nconsole.log('Hello, Rekode!');");
    setOutput("");
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 text-white">
      <Card className="flex-1">
        <CardContent className="p-2 h-[400px]">
          <Editor
            width="100%"
            height="100%"
            defaultLanguage="javascript"
            theme="vs"
            value={code}
            onChange={(value) => setCode(value || "")}
            className="bg-none overflow-scroll"
            options={{
                fontSize: 14, // Adjust font size
                minimap: { enabled: false }, // Hide the minimap
                lineNumbers: "on", // Show line numbers
                scrollbar: { vertical: "hidden", horizontal: "hidden" }, // Hide scrollbars
                padding: { top: 10, bottom: 10 }, // Add padding
                wordWrap: "on", // Enable word wrap
              }}
          />
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button onClick={runCode} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 rounded-lg px-4 py-2">
          <Play size={16} /> Run
        </Button>
        <Button onClick={clearCode} variant="destructive" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2">
          <Trash2 size={16} /> Clear
        </Button>
      </div>
      <Card className="h-[150px] overflow-y-scroll p-4 text-xs">
        <pre>{output || "Output will be displayed here..."}</pre>
      </Card>
    </div>
  );
}