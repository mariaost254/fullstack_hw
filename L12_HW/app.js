//ex 1
document.write("<h1>Ex1</h1>");
let a,b;
a=1; b =0;
if(a>b){
  document.write("a is greater");
} else if (b>a){
  document.write("b is greater");
}else{
  document.write("equal nums");
}
document.write("<hr/>");

//ex 2
document.write("<h1>Ex2</h1>");
let a2,b2,c2;
a2=12; b2 =-10; c2= -14;
let sum = a2+b2+c2;
if(sum>0){
  document.write("+");
} else if (sum<0){
  document.write("-");
}else{
  document.write("0");
}
document.write("<hr/>");

//ex 3
document.write("<h1>Ex3</h1>");
let arr = [18,-15,-7];
let arrSorted = [];
if(arr[0]< arr[1] && arr[0]<arr[2]){
  arrSorted[0] = arr [0];
  if(arr[1]<arr[2]){
    arrSorted[1] = arr [1];
    arrSorted[2] = arr [2];
  }else{
    arrSorted[1] = arr [2];
    arrSorted[2] = arr [1];
  }

}else if (arr[1]< arr[0] && arr[1]<arr[2]){
  arrSorted[0] = arr [1];
  if(arr[0]<arr[2]){
    arrSorted[1] = arr [0];
    arrSorted[2] = arr [2];
  }else{
    arrSorted[1] = arr [2];
    arrSorted[2] = arr [0];
  }
}else{
  arrSorted[0] = arr [2];
  if(arr[1]<arr[0]){
    arrSorted[1] = arr [1];
    arrSorted[2] = arr [0];
  }else{
    arrSorted[1] = arr [0];
    arrSorted[2] = arr [1];
  }
}
document.write(arrSorted);
document.write("<hr/>");


//ex 4
document.write("<h1>Ex4</h1>");
let arr4 = [-5,2800,-2,100,2500];
let max = arr4[0]>arr4[1]? arr4[0]:arr4[1];
let maxNext = arr4[2]>arr4[3]? arr4[2]:arr4[3];
max = max>maxNext? max:maxNext;
max = max> arr4[4]? max: arr4[4];

document.write(max);
document.write("<hr/>");

//ex 5
document.write("<h1>Ex5</h1>");
document.write("<p>Answers will printed in alert</p>");
let arr5 = [-5,2800,-2,101,2000];
arr5[0]%2==0? alert(arr5[0] +" Even"):alert(arr5[0] +" Unven");
arr5[1]%2==0? alert(arr5[1] +" Even"):alert(arr5[1] +" Unven");
arr5[2]%2==0? alert(arr5[2] +" Even"):alert(arr5[2] +" Unven");
arr5[3]%2==0? alert(arr5[3] +" Even"):alert(arr5[3] +" Unven");
arr5[4]%2==0? alert(arr5[4] +" Even"):alert(arr5[4] +" Unven");


document.write("<hr/>");