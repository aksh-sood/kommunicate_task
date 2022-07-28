function reverse(num){
var num=parseInt(num),rev=0;
while(num>0){
    rev=rev*10+(num%10);
num=parseInt(num/10);
}
return rev;
}

console.log(reverse("96425658"));