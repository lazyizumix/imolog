// mdsvex.config.js
import rehypePrettyCode from 'rehype-pretty-code';

const options = {
  extensions: ['.md', '.svx'],
  highlight: false,
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: 'aurora-x', // 好きなテーマに変更可
        keepBackground: true,
      },
    ],
  ],
};

export default options;
