/**
 *  csonst,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// 上書き
// val1 = "var変数を上書き";
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

const val4 = {
  name: "tanaka",
  age: 20
};

console.log(val4);
val4.name = "yamada";
console.log(val4);

const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "hujimori";
// const age = "25";
// 「私の名前はhujimoriです。年齢は25歳です.」

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + 25 + "歳です.";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です。"));

const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "hujimori",
//   age: 25
// };

// const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

const myProfile = ["hujimori", 25];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4);

/**
 * デフォルト値,引数など
 */
const sayHello = (name = "guest") => console.log(`こんにちは!${name}さん!`);
sayHello(name);
sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

console.log(...arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
arr7[0] = 30;
console.log(arr7);
console.log(arr4);

const arr8 = [...arr4];
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "スズキ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name, index) => {
  return `${index + 1}番目は${name}さん`;
});

console.log(nameArr2);

nameArr.map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "山田") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

/**
 * 三項演算子
 */
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(1, 999));

/**
 * 論理演算子
 */
const num4 = 100;
const fee = num4 || "金額は未設定です";
console.log(fee);

const num5 = 100
const fee2 = num5 && "金額は未設定です"
console.log(fee2);
