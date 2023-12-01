// add whatever parameters you deem necessary
//Time Complexity is O(m + n) where m is the length on msg and n is the length of letters.
function makeFreqCounter(string) {
  const freqCounter = {};
  for(let el of string) {
      freqCounter[el] = (freqCounter[el] + 1) || 1;
  }
  return freqCounter;
}

function constructNote(msg, letters) {
  if(msg === "") return true;
  if(letters === "") return false;

  const msgFreq = makeFreqCounter(msg);
  const lettersFreq = makeFreqCounter(letters);

  for(let key in msgFreq) {
    if (!(key in lettersFreq) || msgFreq[key] > lettersFreq[key]) {
      return false;
    }
  }
  return true;
}