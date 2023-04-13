const names: Array<string> = [];

const promise = new Promise<number>((resolve) => {
  setTimeout(() => {
    () => resolve(10);
  }, 2000);
});

promise.then(() => {
  // data.split(" ");
});
