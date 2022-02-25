stop = prompt("Enter a word:")
Strings=[]
while (stop.toLowerCase() != "stop"){
    Strings.push(stop)
    stop = prompt("Enter a word:")
}

console.log(Strings);
for(let i = 0; i < Strings.length; i++){
    console.log(Strings[i]);
}
