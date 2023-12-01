// add whatever parameters you deem necessary
function longestFall(arr) {
  const arrLength = arr.length;
  let max = 0;
  let count = 1;

  for(let i = 1; i < arrLength; i++) {
    if(arr[i] < arr[i - 1]) {
      count ++;
      max = MAth.max(count, max);
    } else {
      count = 1;
    }
  }
  return max || 1;
}
