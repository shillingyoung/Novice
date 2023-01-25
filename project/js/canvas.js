window.onload=function(){
	init();
};
function init(){
	this.x=70;
	this.y=70;
	this.d="left";	
	this.document.getElementById("c1");
	this.context=canvas.getContext("2d");
	robot(70,70);
	c2=document.getElementById("c2");
	ctx2=c2.getContext("2d");
	var image=new Image();
	image.src="img/2.jpg";
	image.onload=function(){
		ctx2.drawImage(image,0,0,1400,800);
	}
}

function robot(x,y){
	//head
	context.fillStyle='#39f';
	context.fillRect(x,y,1400,800);
	//body
	context.beginPath();
	context.fillRect(x+30,y+100,140,140);
}

window.onload=function(){
			init();
		
		}

	    	function init(){
			this.x=70;this.y=70;this.d="left";
			this.canvas=document.getElementById('c1');
			this.context=canvas.getContext('2d');
			robot(70,70);
			c2=document.getElementById('c2');
			ctx2=c2.getContext("2d");
			var image=new Image();
			image.src="img/1.jpg";
			image.onload=function(){
			ctx2.drawImage(image,0,0,1400,800);
			}
		}
		function robot(x,y) {
			// 头			
			context.fillStyle='#3399FF';
			context.fillRect(x,y,200,100);

			// 天线
			context.moveTo(x+50,y);
			context.lineTo(x,y-60);
			
			context.moveTo(150+x,y);
			context.lineTo(200+x,y-60);
			context.strokeStyle='#0000FF';
			context.stroke();
			
			// 眼睛
			context.fillStyle="#FFFF00";
			context.beginPath();
			context.arc(x+50,y+30,15,0,Math.PI*2,true);
			context.closePath();
			context.fill();

			context.beginPath();
			context.arc(x+150,y+30,15,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			
			// 嘴
			context.beginPath();
			context.arc(100+x,y+50,20,0,Math.PI*1,false);
			context.closePath();
			context.strokeStyle="#0000FF";
			context.stroke();
			
			// 身体
			context.beginPath();
			context.fillRect(x+30,y+100,140,140);
			// 胳膊
			context.fillStyle="#3399FF";
			context.fillRect(x-10,y+120,40,150);			
			context.fillRect(x+170,y+120,40,150);
			// 腿
            context.fillRect(50+x,240+y,40,150);			
			context.fillRect(110+x,240+y,40,150);	
		}
		
	var c,ctx;
	var img1=new Image();
	window.onload=function(){
		c=document.getElementById("myCanvas");
		ctx=c.getContext("2d");
		img1.src="img/1.jpg";
		ctx.drawImage(img1,0,0,c.width,c.height);  
	}
	function enlarge(ev){
		var ev=ev||window.event;
		var x=ev.clientX-30;
		var y=ev.clientY-30; 
		ctx.drawImage(img1,x,y,60,60,0,0,c.width,c.height);  
	}