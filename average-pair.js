// add whatever parameters you deem necessary
//Time Complexity is O(n)
function averagePair(arr, target) {
  if(arr.length === 0) return false;
  let left = 0;
  let right = arr.length -1;

  while(left < right){
    const sum = arr[left] + arr[right];
    if(sum === target * 2){
      return true;
    } else if(sum > target * 2){
      right --;
    } else {
      left ++;
    }
  }
  return false;
}
