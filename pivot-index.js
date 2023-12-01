// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let total = 0;
  let leftSum = 0;

  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  for(let i = 0; i < arr.length; i++) {
    if(leftSum * 2 == total - arr[i]){
      return i;
    }
    leftSum += arr[i];
  }
  return -1
}
