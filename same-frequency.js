// add whatever parameters you deem necessary

function makeFreqCounter(string) {
  const freqCounter = {};
  for(let el of string) {
      freqCounter[el] = (freqCounter[el] + 1) || 1;
  }
  return freqCounter;
}

function sameFrequency(int1, int2) {
  const intFreq1 = makeFreqCounter(int1.toString());
  const intFreq2= makeFreqCounter(int2.toString());
  console.log(JSON.stringify(intFreq1), JSON.stringify(intFreq2));

  if(JSON.stringify(intFreq1) == JSON.stringify(intFreq2)) {
    return true;
  } else {
    return false;
  }
}
