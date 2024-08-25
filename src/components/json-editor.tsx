import React from "react";
import { Textarea } from "./ui/textarea";

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ value, onChange }) => {
  return (
    <Textarea
      className="min-h-[90vh] w-full resize-none p-2 font-mono text-sm md:max-h-[70vh] md:min-h-[69vh]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
