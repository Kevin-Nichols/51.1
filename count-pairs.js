// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let m = new Map();
  let count = 0;
  const arrLength = arr.length;

  for(let i = 0; i < arrLength; i++) {
    if(m.has(num - arr[i])) {
      count += m.get(num - arr[i]);
    }
    if(m.has(arr[i])){
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }
  return count;
}
