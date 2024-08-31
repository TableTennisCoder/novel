import { Node } from "@tiptap/core";

export const InstagramEmbedder = Node.create({
  name: "instagramEmbed",
  group: "block",
  atom: true,

  addCommands() {
    return {
      setInstagramEmbed:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "instagramEmbed",
            attrs: options,
          });
        },
    };
  },

  addNodeView() {
    return ({ node, HTMLAttributes }) => {
      const { src } = node.attrs;
      console.log(src);
      // Create an iframe element
      const dom = document.createElement("iframe");
      dom.src =
        "https://www.instagram.com/reel/C4npYZYsW1m/embed/captioned/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fjustinmahar.github.io&rp=%2Freact-social-media-embed%2Fiframe.html%3FviewMode%3Dstory%26id%3Dembeds-instagramembed--main-example-with-captions%26args%3D#%7B%22ci%22%3A10%2C%22os%22%3A149207.5%2C%22ls%22%3A5073.100000023842%2C%22le%22%3A5076.100000023842%7D";
      dom.width = "400";
      dom.height = "500";
      dom.frameBorder = "0";
      dom.allowTransparency = "true";

      return {
        dom, // Return the `dom` element
      };
    };
  },
});
