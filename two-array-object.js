// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const obj = {};

  for(i in arr1) {
    obj[arr1[i]] = arr2[i] || null;
  }
  return obj;
}