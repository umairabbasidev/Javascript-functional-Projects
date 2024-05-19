const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  console.log(i + 1, i);
  rows.push(character.repeat(i + 1));
}
// console.log(rows);
let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
