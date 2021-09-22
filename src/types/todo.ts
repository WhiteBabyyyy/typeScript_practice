//Typeで型の定義を記述できる。typeの頭は大文字にする
export type TodoType = {
  //objectの場合は,で区切っているが、typeの場合は;で区切る必要がある
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
//?を書くと、必須ではないという意味になる
