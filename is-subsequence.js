// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  if(str1.length > str2.length) return false;

  const str2Length = str2.length;
  let count = 0;

  for(let i = 0; i < str2Length; i++){
    if(str1[count] === str2[i]){
      count ++;
    }
  }
  return count === str1.length;
}
