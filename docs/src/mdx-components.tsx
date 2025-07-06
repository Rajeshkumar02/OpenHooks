import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...TabsComponents,
    TypeTable,
    DynamicCodeBlock,
    ...components,
  };
}
