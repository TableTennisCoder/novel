import React from "react";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";

const SampleNodeComponent = (props) => {
  const { editor } = props;

  return (
    <NodeViewWrapper>
      <h1> Custom Node </h1>
      <div> This is the content of custom node </div>
    </NodeViewWrapper>
  );
};

export default SampleNodeComponent;
