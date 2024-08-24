import React from "react";
import { Textarea } from "./ui/textarea";

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ value, onChange }) => {
  return (
    <Textarea
      className="h-[85vh] w-full resize-none p-2 font-mono text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
