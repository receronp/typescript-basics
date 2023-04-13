// const names: Array<string> = [];

// const promise = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     () => resolve(10);
//   }, 2000);
// });

// promise.then(() => {
//   // data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "Max" }, { age: 30 });
console.log(mergedObject.age);
