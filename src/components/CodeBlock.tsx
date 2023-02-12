import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

export const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <p className="bg-gray-500 w-fit rounded text-sm flex items-center px-2 italic">
      {children}
    </p>
  );
};
