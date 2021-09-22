import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* joinは()内の文字列で配列の要素をくっつけて表示するという関数 */}
      {/* オプショナルチェイニング?をつけることにより、
      　空文字の場合は以降の処理を行わない、undifinedを返すという記述 */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
