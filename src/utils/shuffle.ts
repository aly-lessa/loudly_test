const shuffleArray: (arr: Array<any>) => Array<any> = (arr) => {
  let j = 0;
  let temp: Array<any> = [];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    // eslint-disable-next-line no-param-reassign
    arr[j] = arr[i];
    // eslint-disable-next-line no-param-reassign
    arr[i] = temp;
  }
  return arr;
};
export default shuffleArray;
