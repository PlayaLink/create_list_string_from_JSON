function list(names){
  var str = "";
  if(!names.length){
    return str;
  }
  for(let i = 0; i < names.length - 1; i++){
    str += names[i]["name"];
    if(i <= names.length - 3){
      str += ", ";
    } else if(i === names.length -2) {
      str += " & ";
    }
  }
  return str += names[names.length-1]["name"];
}
