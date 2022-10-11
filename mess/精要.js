var book={
      name:"the javascript",
      year:2014
};//创建对象

var person1={
	name:"123",
	sayName:function(){
	console.log(this.name);
}	//对象方法

var person2=Object.treate(persion1,{
    name:{
	configurable:ture,
	enumerable:true,
	value:"234",
	writable:true
}
});//继承

function reflect(value){
	return value;
}//创建函数 函数声明  先使用后声明
var add=function(num1,num2){
	return num1+num2;
}	//函数表达式 匿名函数 定义多个重名函数只有最后一个有效


var name="abc"	//临时对象
var name=new String("abc")

obj.prenventExtensions()//不可拓展，不能添加新属性
obj.seal()//只能读写属性
obj.freeze()//只能读

var _name//私有
var obj=(function){

	return 0;
}();//私有





