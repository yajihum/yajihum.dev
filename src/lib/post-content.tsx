import H2WithId from '@/components/atoms/H2WithId';
import { ClassAttributes, HTMLAttributes, isValidElement } from 'react';
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
    <H2WithId id={title} hasBorder={true}>
      {children}
    </H2WithId>
  );
};

type CodeProps = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps;

type NodeData = {
  meta?: string;
};

const CodeBlock = ({ className, children, node }: CodeProps) => {
  const meta = (node?.data as NodeData)?.meta;
  const filename = meta ? meta.replace(':', '') : '';

  return (
    <>
      {filename && (
        <div className="px-2 font-semibold md:px-0">
          <span>{filename}</span>
        </div>
      )}
      <code className={cn('scrollbar-dark', className)}>{children}</code>
    </>
  );
};

type PreProps = ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps;

const Pre = (props: PreProps) => {
  if (isValidElement(props.children) && props.children.type === 'code') {
    const childClassName = props.children.props.className;
    const childChildren = props.children.props.children;
    console.log(props.children.props);

    return (
      <pre
        className={cn('grid grid-cols-1 gap-1 px-2 md:px-4', props.className)}
      >
        <CodeBlock className={childClassName} node={props.children.props.node}>
          {childChildren}
        </CodeBlock>
      </pre>
    );
  }

  return (
    <pre className={cn('grid grid-cols-1 gap-3 px-2 md:px-4', props.className)}>
      {props.children}
    </pre>
  );
};

export const ReactMarkdownComponents = {
  h2: H2,
  code: CodeBlock,
  pre: Pre,
};
