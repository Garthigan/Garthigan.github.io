import { Fragment } from "react";
import { aboutMe } from "@/constants/data";

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const linkifyNames = (text: string, links: Record<string, string>) => {
  const names = Object.keys(links);
  if (names.length === 0) return text;

  const pattern = new RegExp(`(${names.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    links[part] ? (
      <a
        key={i}
        href={links[part]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1772d0] hover:text-[#f09228]"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
};

interface BioTextProps {
  text: string;
  className?: string;
  paragraphClassName?: string;
}

const BioText = ({ text, className, paragraphClassName }: BioTextProps) => {
  const paragraphs = text.split("\n\n");

  return (
    <div className={className}>
      {paragraphs.map((para, i) => (
        <p key={i} className={paragraphClassName}>
          {linkifyNames(para, aboutMe.supervisorLinks)}
        </p>
      ))}
    </div>
  );
};

export default BioText;
