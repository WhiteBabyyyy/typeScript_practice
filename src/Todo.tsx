//親コンポーネントから必要なpropsが渡されていないのにエラーにならないのはバグの温床になるため、
//コンポーネントに型指定をして、受け渡されていないとエラーになる機能を実装する
import { VFC } from "react";
import { TodoType } from "./types/todo";

//Pickはあるプロパティ名と型名を記述すると、ある型のこのプロパティだけを抜き出して定義するという使い方ができる
//pickのユーザーidとtitleとcompletedのみを抜き出すという形
//omitはpickの反対で何を省略するか(idを除いた方を定義する)
export const Todo: VFC<Omit<TodoType, "id">> = (
  //  props: Pick<TodoType, "userId" | "title" | "completed">
  props
) => {
  //completedはundifinedで渡されることがあるので、初期値をfalseで設定しておく
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};

//コンポーネントのpropsで型定義をすることで、変更があった時など、どこに影響があるのか分かりやすくなっている
