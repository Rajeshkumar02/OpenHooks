"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";

interface CodeFile {
  name: string;
  lang: string;
  code: string;
  highlight?: number[];
}

interface CodePreviewProps {
  title: string;
  files: CodeFile[];
  preview?: React.ReactNode;
  showCopy?: boolean;
  showExpand?: boolean;
  defaultTab?: string;
}

export default function CodePreview({
  title,
  files,
  preview,
  showExpand = false,
}: CodePreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="not-prose my-6">
      <div className="border rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
          <h3 className="font-medium">{title}</h3>
          <div className="flex gap-2">
            {showExpand && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs px-2 py-1 rounded bg-background hover:bg-muted"
              >
                {isExpanded ? "Collapse" : "Expand"}
              </button>
            )}
          </div>
        </div>

        {/* Preview */}
        {preview && (
          <div className="p-4 bg-background border-b">
            <div className="rounded border p-4 bg-card">{preview}</div>
          </div>
        )}

        {/* Code */}
        <div
          className={`${isExpanded ? "max-h-none" : "max-h-96"} overflow-auto`}
        >
          {files.length === 1 ? (
            <pre className="p-4 bg-slate-950 text-slate-50 overflow-auto">
              <code className={`language-${files[0].lang}`}>
                {files[0].code}
              </code>
            </pre>
          ) : (
            <Tabs groupId="code-files" items={files.map((f) => f.name)}>
              {files.map((file) => (
                <Tab key={file.name} value={file.name}>
                  <pre className="p-4 bg-slate-950 text-slate-50 overflow-auto">
                    <code className={`language-${file.lang}`}>{file.code}</code>
                  </pre>
                </Tab>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}
