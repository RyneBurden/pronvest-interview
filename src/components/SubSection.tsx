import { CodeBlock } from "./CodeBlock";

interface SubSectionProps {
  subHeading: string;
  innerText: string;
}

export const SubSection = ({ subHeading, innerText }: SubSectionProps) => {
  return (
    <span className="space-x-2">
      <h4 className="text-lg">{subHeading}</h4>
      <CodeBlock>{innerText}</CodeBlock>
    </span>
  );
};
