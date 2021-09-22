import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//関数コンポーネントの型指定としてはこの書き方(FC)が適切
//FCではchildrenを暗黙的に許容してしまうので、verアップデート前まではVFCを暫定的に使用
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
