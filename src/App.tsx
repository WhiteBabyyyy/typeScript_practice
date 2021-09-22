import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "Shira",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  //stateの型指定は下記のように右辺に<>で指定
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClockFechDatta = () => {
    axios
      //配列データの中に定義したTodoデータが入っている
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onClockFechDatta}>データ取得</button>
      {todos.map((todo) => (
        //mapには一意となるkeyが必要
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
