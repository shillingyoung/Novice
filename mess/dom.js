alert("ww");
var beatles=Array("john","paul","george","ringo");
var beatle=["john","paul","george","ringo"];
var lemon={name:"john",year=1900,living=false};
var h1=document.getElementById("h1");
var pr=document.getElementsByTagName("p");
h1.setAttribute("title","a list of goods");
for(var=0;i<pr.length;i++)
{
  alert(pr[i].getAttribute("title"));
}
alert(document.getElementsByClassName("green berry").length);
alert(document.getElementsByTagName("p").length);

function showPic(whichpic){
if(!document.getElementsByTagName)	  return false;
if(!document.getElementById)	  return false;
var source=whichpic.getAttribute("href");
var a=document.getElementById("a");
a.setAttribute("src",source);
var text=whichpic.getAttribute("title");
var description=document.getElemetById("description");
description.firstChild.nodeValue=text;
}
alert("descritipn.firstChild.nodeValue");
onclick="showPic(this);return false;"

function countBodyChildren(){
   var body_element=document.getElementsByTagName("body")[0];
   alert(body_element.childNodes.length);
}
window.onload=countBodyChildren;
alert(body_element.nodeType);
addLoadEvent(countBodyChildren);
link[i].onclick=function(){s
  return showPic(this)?false:true;
}
link[i].onkeypress=link[i].onclick;

window.onload=function(){
   var testdiv=document.getElementById("testdiv");
   testdiv.innerHTML="<p> I <em>this</em> content</p>";
}

window.onload=function(){
  var para=document.createElement("p");
  var info="nodeName:";
  info+=para.nodeName;
  info+="NodeType:";
  info+=para.nodeType;
  alert(info);
}

window.onload=function(){
var para=document.createElement("p");
var testdiv=document.getElementById("testdiv");
testdiv.appendChild(para);
var txt=document.createTextNode("Hello world");
para.appendChild(txt);
}

var placeholder=docuement.createElement("img");
var gallery=document.getElememtById('imagegallery');
gallery.parentNode.insertBefore(placeholder,gallery);

function getNewContent(){
  var request=getHTTPobject();
  if(request){
	request.open("GET","exmaple.txt",true);
	request.onreadystatechange=function(){
		if(request.readyState==4){
			var para=document.craeteElement("p");
			var txt=document.createTextNode(request.responseText);
			para.appendChild(txt);
			document.getElementById('new').apppendChild(para);
		}
};
request.send(null);
}else{
  alert('sorry, your ');
}
}
addLoadEvent(getNewContent);

function displayAbbreviations(){
 var abbreviations=document.getElementsByTagName("abbr");
 if(abbreviations.length<1) return false;
 var defs=new Array();
 for(var i=0;i<abbreviations.length;i++)
{
	var current_abbr=abbreviations[i];
	var definition=current_abbr.getAttribute("title");
	var key=current_abbr.lastChild.nodeValue;
	defs[key]=definition;
}
var dlist=document.createElement("d1");
for(key in defs){
	var definition=defs[key];
	var dtitle=document.createElement("dt");
	var dtitle_text=document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	var ddesc=document.createElement("dd");
	var ddesc_text=document.craeteTextNode(definition);
	ddesc.appendChild(dtitle);
	dlist.appendChild(dtitle);
	dlist.appendChild(ddesc);
}
var header=document.createElement("h2");
var header_text=document.createTextNode("Abbreviations");
header.appendChild(header_text);
document.body.appendChild(header);
document.body.appendChild(dlist);
}

alert("the color is"+para.style.color);

para.style.color='black';

function styleHeaderSiblings(){
  if(!document.getElementByTagName)  return false;
  var headers=document.getElementByTagName("h1")
  var elem;
  for(var i=0;i<header.length;i++)
{
	elem=getNextElement(header[i].nextsibling);
	elem.style.fontWeight="bold";
	elem.style.fontSize='1.2em';
	elem.className="intro";
}
}
function getNextElemnet(node){
  if(node.nodeType==1)  return node;
  if(node.nextSibling)       return getNextElement(node.nextsibling);
  return null;
}s

function stripeTables(){
  if(!document.getElementsByTagName)	return false;
  var tables=document.getElmentsByTagName("table");
  var odd,rows;
  for（var i=0;i<tables.length;i++)
{
	odd=false;
	rows=table[i].getElementsByTagName("tr");
	for(var j=0;j<rows.length;j++) 
	{
	if(odd==ture)
	{rows[j].style.backgroundColor='#ffc';
	 odd=false;}
	else odd=true;
	}
	}
}
}

function moveElement(id,x,y,interval){
  var elem=document.getElementById(id);
  if(elem.document)		clearTimeout(elem.movement);
  var xpos=paraInt(elem.style.left);
  var ypos=paraInt(elem.style.top);
  var dist=0;
  if(xpos==x&&ypos==y) 	return ture;
  if(xpos<x)	{dist=Math.ceil((x-xpos)/10);xpos=xpos+dist ; 
  if(xpos>x)	xpos--;
  if(ypos<y)	ypos++;
  if(ypos>y)	ypos--;
  elem.style.left=xpos+"px";
  elem.style.top=ypos+"px";
  var repeat="mobeElement(id+","+x+y+","+interval)";
  movement=setTimeout(repeat,interval);
}