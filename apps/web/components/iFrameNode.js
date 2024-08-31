import { Node } from "@tiptap/core";

export const IframeNode = Node.create({
  name: "iframe",
  group: "block",
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parse: (value) => value,
        serialize: (value) => value,
      },
      width: {
        default: null,
        parse: (value) => value,
        serialize: (value) => value,
      },
      height: {
        default: null,
        parse: (value) => value,
        serialize: (value) => value,
      },
    };
  },

  addNodeView() {
    return ({ node, HTMLAttributes }) => {
      const { src, width, height } = node.attrs;
      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.width = width;
      iframe.height = height;

      return { dom: iframe };
    };
  },
});
