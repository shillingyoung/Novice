function fun1(e){
	alert(e.keyCode)
}
function time(){
	var d=new Date;
	timer.innerHTML="<i>"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"<i>";
}
setInterval("time()",1000)

function date(){
	var d=new Date;
	data.innerHTML="<i>今天是："+d.getFullYear()+"年"+d.getMonth()+"月"+d.getDate()+"日，星期"+d.getDay()+"<i>";
}
setInterval("date()",1000)
function openWindow(){
	var w=window.open("css.html","mywidow","menubar=no,heigt=200,width=300,resizable=no","ture");
}
function closewindow(){
	w.close;
}
function cancal(){
	alert("delete?");
}
function input(){
	prompt("请输入：")
}

function show(){
	document.getElementById("box2").style.display="block";
}
function hide(){
	document.getElementById("box2").style.display="none";
}
function clr(event){
	event.srcElement.value="";
}
function add(){
	var t2=document.getElementsByName("text2");
	var div2=document.getElementsByClassName("box2");
	div2[0].innerHTML+="<p>"+t2[0].value+"<p>";
}
function color(){
	var color=document.getElementsByName("color");
	document.getElementById("box2").style.color=color[0].value;
}
function change(){
	var t1=document.getElementsByName("text1");
	var div1=document.getElementsByClassName("box2");
	div1[0].innerHTML+="<p>"+t1[0].value+"<p>";
}