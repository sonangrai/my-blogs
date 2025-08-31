"use client";
import { useTheme } from "@/app/theme-provider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter({ value, children }: any) {
  const { theme } = useTheme();

  return (
    <SyntaxHighlighter
      language={value.language || "javascript"}
      style={theme == "light" ? oneLight : oneDark}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
