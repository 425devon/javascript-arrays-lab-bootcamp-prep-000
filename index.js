const app = "I don't do much."

function destructivelyAppendKitten(name){

  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function prependKitten(name){
  var newArr = [];
  newArr = kittens;
  newArr.unshift(name);
  return newArr;
}