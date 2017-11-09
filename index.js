const app = "I don't do much."
function destructivelyAppendKitten(arr,n){
  return arr[arr.length-1]=n;
}
function destructivelyPrependKitten(arr,n){
  return [n,...arr];
}
