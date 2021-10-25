let sum = function sum(a, b) {
  return a + b;
}
let name = "卓炎秋";
let age = 23;
let user = {
  name: name,
  age: age
}
function getNextAge() {
  return age++;
}

export {sum,user,name,age,getNextAge};

// 模块默认输出，只能有一个export default，导入时可自定义导入名称
export default function add(a, b) {
  return a + b;
}