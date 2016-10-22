
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;
var o=0;
var p=0;
var q=0;

function sum1(){
  a=$("#first").val() || 0;
  b=$("#third").val() || 0;
  c=$("#fifth").val() || 0;
  d=$("#seven").val() || 0;
  e=$("#nine").val() || 0;
  f=$("#eleven").val() || 0;
  g=$("#thirteen").val() || 0;
  h=Number(a)+add(Number(b),add(Number(c), add(Number(d), add(Number(e), add(Number(f), Number(g))))));
  $("#fifteen").val(h) || 0;
  i=$("#second").val() || 0;
  j=$("#fourth").val() || 0;
  k=$("#sixth").val() || 0;
  l=$("#eight").val() || 0;
  m=$("#ten").val() || 0;
  n=$("#twelve").val() || 0;
  o=$("#fourteen").val() || 0;
  p=Number(i)+Number(j)+Number(k)+Number(l)+Number(m)+Number(n)+Number(o);
  $("#sixteen").val(p);
  q=(p/h)*100;
  $("#seventeen").val(q);
};

function add(a,b){
  if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error("only numbers are allowed");
    }
    else{
        return a+b;
    } 
} 