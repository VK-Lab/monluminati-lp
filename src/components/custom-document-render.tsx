import React, { type ComponentProps } from "react";
import cn from "classnames";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import styles from "@/assets/styles/CustomRenderer.module.css";
import "../assets/styles/custom-rte.css";

// type CustomRendererProps = ComponentProps<typeof DocumentRenderer>;

interface CustomRendererProps extends ComponentProps<typeof DocumentRenderer>{
  inlineOnly?: boolean;
}

const defaultElementRenderers: CustomRendererProps["renderers"] = {
  block: {
    // all custom components are block components
    // so they will be wrapped with a <div /> by default
    // we can override that to whatever wrapper we want
    // for eg. using React.Fragment wraps the component with nothing
    block: React.Fragment as any, // FIXME
    // customise blockquote elements with your own styles
    blockquote({ children }) {
      return <blockquote className={styles.blockquote}>{children}</blockquote>;
    },
    // block code ``` ```
    code({ children }) {
      return <pre className={styles.pre}>{children}</pre>;
    }
    // and more - check out the types to see all available block elements
  },
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>;
    },
    // inline code ` `
    code: ({ children }) => {
      return <code className={styles.code}>{children}</code>;
    }
    // and more - check out the types to see all available inline elements
  }
};

// const customComponentRenderers: CustomRendererProps['componentBlocks'] = {
//   hero: props => {
//     return <Hero {...props} />
//   },
//   callout: props => {
//     return <Callout {...props} />
//   },
//   quote: props => {
//     return <Quote {...props} />
//   },
//   carousel: props => {
//     return <Carousel {...props} />
//   },
//   tweet: props => {
//     return <Tweet {...props} />
//   },
//   youtubeVideo: props => {
//     return <YouTubeVideo {...props} />
//   },
// }

export function CustomRenderer({ inlineOnly = false, document }: CustomRendererProps) {
  return (
    <div className={cn({
      "e-rte-content": inlineOnly === false
    })}>
      <DocumentRenderer
        renderers={defaultElementRenderers}
        // componentBlocks={customComponentRenderers}
        document={document}
      />
    </div>
  );
}
