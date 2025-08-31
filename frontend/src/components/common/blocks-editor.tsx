import SanityImageComp from "./sanity-image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeHighlighter from "./code-highlighter";

export const BlockComponents = {
  types: {
    // For images
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-4">
          {/* Replace with your sanity image builder if needed */}
          <SanityImageComp
            asset={value.asset} // If you use next-sanity image builder, use urlFor(value).url()
            alt={value.alt || " "}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      );
    },

    code: ({ value }: any) => {
      return (
        <div className="my-4">
          {value.filename && (
            <div className="bg-gray-800 text-gray-300 px-2 py-1 text-sm rounded-t-md">
              {value.filename}
            </div>
          )}
          <CodeHighlighter value={value}>{value.code}</CodeHighlighter>
        </div>
      );
    },
  },

  block: {
    normal: ({ children }: any) => (
      <p className="font-sans text-md my-2 dark:text-white">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl dark:text-white">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl dark:text-white">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl dark:text-white">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl dark:text-white">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 pl-4 italic">{children}</blockquote>
    ),
  },
};
