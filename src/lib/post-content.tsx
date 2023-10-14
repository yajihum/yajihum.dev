import { ClassAttributes, HTMLAttributes } from 'react';
import type { ExtraProps } from 'react-markdown';
import { cn } from './utils';

const H2 = ({
  node,
  children,
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps) => {
  const title =
    node?.children[0] && 'value' in node?.children[0]
      ? node?.children[0].value
      : '';

  return (
    <h2 id={title} className="scroll-mt-50">
      {children}
    </h2>
  );
};

type CodeBlockProps = {
  inline?: boolean;
  className?: string;
  children: string;
};

const CodeBlock: CodeComponent = ({
  inline = true,
  className,
  children,
}: CodeBlockProps) => {
  if (inline) {
    return <code className={cn('', className)}>{children}</code>;
  }
  const match = /language-(\w+)(:.+)/.exec(className || '');
  const lang = match && match[1] ? match[1] : '';
  const name = match && match[2] ? match[2].slice(1) : '';
  return (
    <pre className="znc">
      <p>{name}</p>
      <code className="">{children}</code>
    </pre>
  );
};

export const ReactMarkdownComponents = {
  h2: H2,
  code: CodeBlock,
};
