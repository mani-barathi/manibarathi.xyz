import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

function Pre(props) {
  const className = props.children.props.className || "";
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default {
  pre: Pre,
};
