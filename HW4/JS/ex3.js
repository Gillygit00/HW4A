const values = [3, 11, 7, 2, 9, 10];
sum=0
Max=0
Min=99999
for (let i = 0; i < values.length; i++){
    sum+=values[i];
    if (values[i]<Min){
        Min = values[i]
    }
    if (values[i]>Max){
        Max = values[i]
    }
};
console.log(sum);
console.log(Max);
console.log(Min);