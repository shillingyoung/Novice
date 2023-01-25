var goodData={
	path:[
		{
			title:"手机、数码、通讯",
			url:"###"
		},
		{
			title:"手机",
			url:"###"
		},
		{
			title:"Apple苹果",
			url:"###"
		},
		{
			title:"iPhone 6S",
		}
	],
	imagessrc:[
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/1.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/2.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/1.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/2.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/1.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/2.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/1.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/2.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/1.jpg"},
		{b:"img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg", s:"img/2.jpg"},
	],
	goodsDetail:{
		title:"Apple iphone 6s",
		recommend:"推荐下方[移动优惠]",
		price:5299,
		promoteSales:{
			type:"加价购",
			content:"满999元减20"
		},
		support:"以旧换新，闲置手机回收",
		address:"广东省深圳市宝安区",
		evaluateNum:57000,
		crumbData:[
			{
				"title": "选择颜色",
				                "data": [
				                    {
				                        type: "金色",
				                        changePrice: 0
				                    },
				                    {
				                        type: "银色",
				                        changePrice: 40
				                    },
				                    {
				                        type: "黑色",
				                        changePrice: 90
				                    },
				                ]
				            },
				            {
				                "title": "内存容量",
				                "data": [
				                    {
				                        type: "16G",
				                        changePrice: 0
				                    },
				                    {
				                        type: "64G",
				                        changePrice: 300
				                    },
				                    {
				                        type: "128G",
				                        changePrice: 900
				                    },
				                    {
				                        type: "256G",
				                        changePrice: 1300
				                    },
				                ]
				            },
				            {
				                "title": "选择版本",
				                "data": [
				                    {
				                        type: "公开版",
				                        changePrice: 0
				                    },
				                    {
				                        type: "移动版",
				                        changePrice: -1000
				                    }
				                ]
				            },
				            {
				                "title": "购买方式",
				                "data": [
				                    {
				                        type: "官方标配",
				                        changePrice: 0
				                    },
				                    {
				                        type: "优惠移动版",
				                        changePrice: -240
				                    },
				                    {
				                        type: "电信优惠版",
				                        changePrice: -390
				                    },
				                ]
			}
		]
	}
}


window.onload=function(){
	var bigImgIndex=0;
	
	navData();
	function navData(){
		 var navPath=document.getElementById('path');
		 var path=goodData.path; 
		 for(var i=0;i<path.length;i++){
			 if(i==path.length-1){
				 var aNode=document.createElement("a");
				 aNode.innerText=path[i].title;
				 navPath.appendChild(aNode);
			 }
			 else{
				 var aNode=document.createElement("a");
				 aNode.href=path[i].url;
				 aNode.innerText=path[i].title;
				 var iNode=document.createElement('i');
				 iNode.innerText='/';
				 navPath.appendChild(aNode);
				 navPath.appendChild(iNode);
			 }
		 }
	 }
	 
	 big();//放大镜
	 function big(){
		 var bigpic=document.getElementById('big');
		 var pic=document.getElementById('pic');
		 var imagessrc=goodData.imagessrc;
		 bigpic.onmouseenter =function(){
			 var mask=document.createElement('div');
			 mask.className="mask";
			 var smallpic=document.createElement('div');
			 smallpic.className="small";
			 var smallimg=document.createElement('img');
			 bigImg.src=imagessrc[bigImgIndex].b;
			 smallimg.src="img/b5d68da5ly1h5l0cud2ihj230y20kb2b.jpg";
			 smallpic.appendChild(smallimg);
			 bigpic.appendChild(mask);
			 pic.appendChild(smallpic);
			 bigpic.onmousemove=function(){
				 var left=event.clientX-bigpic.getBoundingClientRect().left-mask.offsetWidth/2;
				 var top=event.clientY-bigpic.getBoundingClientRect().top-mask.offsetHeight/2;
				
				 if(left<0)	left=0;
				 if(left>smallpic.clientWidth-mask.offsetWidth)	left=smallpic.clientWidth-mask.offsetWidth;
					
				 if(top<0)	top=0;
				 else if(top>smallpic.clientHeight-mask.offsetHeight)	top=smallpic.clientHeight-mask.offsetHeight;
					
	
				 mask.style.left=left+"px";
				 mask.style.top=top+"px";
				 
				 var scale=(bigpic.clientWidth-mask.offsetWidth)/(smallimg.offsetWidth-smallpic.clientWidth);
				 smallimg.style.left=-left/scale+"px";
				 smallimg.style.top=-top/scale+"px";
			 }
			 bigpic.onmouseleave=function(){
				 bigpic.removeChild(mask);
				 pic.removeChild(smallpic);
			 }
		 }
	 }
	 
	 Data();
	 function Data(){
		 var ul=document.getElementById('ul');
		 var imagessrc=goodData.imagessrc;
		 for(var i=0;i<imagessrc.length;i++){
			 var newLi=document.createElement('li');
			 var newImg=document.createElement('img');
			 newImg.src=imagessrc[i].s;
			 newLi.appendChild(newImg);
			 ul.appendChild(newLi);
		 }
	 }
	 
	 Click();
	 function Click(){
		 var liNode=document.getElementsByTagName("li");
		 var big_img=document.getElementById('pic1');
		 var imagessrc=goodData.imagessrc;
		 big_img.src=imagessrc[0].s;
		 for(let i=0;i<liNode.length;i++){
			 liNode[i].index=i;
			 liNode[i].onclick=function(){
				 var idx=this.index;
				 bigImgIndex=idx;
				 big_img.src=imagessrc[idx].s;
			 }
		 }
	 }
	 nailClick();
	 function nailClick(){
		 var pre=document.getElementById('left');
		 var next=document.getElementById('right');
		 var piclist=document.getElementsByClassName('piclist');
		 var liNodes=document.getElementsByTagName('li');
		 var start=0;
		 var step=(liNodes[0].offsetWidth+20)*2;
		 var endPosition=(liNodes.length-5)*(liNodes[0].offsetWidth+20);
		 pre.onclick=function(){
			 start-=step;
			 if(start<0){
 				 start=0;
			 	}
			 ul.style.left=-start+"px";
			 }
		 
		 
		 next.onclick=function(){
			 start+=step;
			 if(start>endPosition){
				 start=endPosition;
			 }
			 ul.style.left=-start+"px";
		 }
	 }
	 
	 rightData();
	 function rightData(){
		 var detail=document.getElementById('detail');
		 var goodsDetail=goodData.goodsDetail;
		 var s=`<h3>${goodsDetail.title}</h3>
						<p>${goodsDetail.recommend}</p>
						<div class="priceWrap">
							<div class="priceTop">
								<span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
								<div class="price">
									<span>$</span>
									<p id="money">${goodsDetail.price}</p>
									<i>降价通知</i>
								</div>
								<p>
									<span>累计评价</span>
									<span>${goodsDetail.evaluateNum}</span>
								</p>
							</div>
							<div class="priceBt">
								<span >促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
								<p>
									<span>${goodsDetail.promoteSales.type}</span>
									<span>${goodsDetail.promoteSales.content}</span>
								</p>
							</div>
							
						</div>
							<div class="support">
								<span>支&nbsp;&nbsp;&nbsp;&nbsp;持</span>
								<p>${goodsDetail.support}</p>
							</div>
							<div class="address">
								<span>配&nbsp;&nbsp;送&nbsp;&nbsp;至</span>
								<p>${goodsDetail.address}</p>
							</div>`;
		detail.innerHTML=s;
	 }
	 
	 bottomData();
	 function bottomData(){
		 var choose=document.getElementById("choose");
		 
		 var crumbData=goodData.goodsDetail.crumbData;
		 for(var i=0;i<crumbData.length;i++){
			 var dlNode=document.createElement('dl');
			 var dtNode=document.createElement('dt');
			 dtNode.innerText=crumbData[i].title;
			 dlNode.appendChild(dtNode);
			 for(var j=0;j<crumbData[i].data.length;j++){
				 var ddNode=document.createElement('dd');
				 ddNode.innerText=crumbData[i].data[j].type;
				 
				 dlNode.appendChild(ddNode);
			 }
			 choose.appendChild(dlNode);
		 }
	 }
	 
	 clickBind();
	 function clickBind(){
		 
		 var dlNodes=document.getElementsByTagName('dl');
		 var arr=new Array(dlNodes.length);
		 var chooseMark=document.getElementsByClassName('chooseMark');
		 
		 arr.fill(0);
		 
		 for(var i=0;i<dlNodes.length;i++){
			 (function (i){
				  var ddNodes=dlNodes[i].querySelectorAll('dd');
				  
					for(var j=0;j<ddNodes.length;j++){
						
					ddNodes[j].onclick=function(){
						
						chooseMark.innerHTML="";
					for(var k=0;k<ddNodes.length;k++){
						ddNodes[k].style.color='#666';
				 }
					this.style.color="red";
					
					arr[i]=this;
					
					
					arr.forEach(function(value,index){
						if(value){
							var markDiv=document.createElement('div');	
							
							markDiv.className='mark';	
							markDiv.innerText=value.innerText;
							var aNode=document.createElement('a');
							aNode.innerText='X';
							aNode.setAttribute('index',index);
							markDiv.appendChild(aNode);
							
							chooseMark.appendChild(markDiv);
							
							}
					}) 
			 }
			}
		  })(i)
		  
		  function change(arr){
			  var oldPrice=document.getElementById('money');
			  
			  for(var i=0;i<arr.length;i++){
				  console.log(arr[i]);
			  }
		  }
			
		 }
		 
	 }
	 
	 choice();
	 function choice(){
		 var ipts=document.getElementsByClassName('choice');
		 var leftprice=document.getElementById('price');
		 var newprice=document.getElementById('new');
		 
		 for(var i=0;i<ipts.length;i++){
			 ipts[i].onclick=function(){
				 var oldprice=Number(leftprice.innerText.slice(1)) ;
				 for(var j=0; j<ipts.length;j++){
				 if(ipts[j].checked){
					 oldprice=oldprice+Number(ipts[j].value);
				 }
			 }
			 newprice.innerHTML='$'+oldprice;
			 }
		 }
	 }
	 
	 
	 function tab(tabBt,tabCt){
		 for( var i=0;i<tabBt.length;i++){
			 tabBt[i].index=i;
			 tabBt[i].onclick=function(){
				 for(var j=0;j<tabBt.length;j++){
					 tabBt[j].className='';
					 tabCt[j].className='';
				 }
				 this.className='active';
				 tabCt[this.index].className='active';
				 
			 }
		 }
	 }
	 leftTab();
	 function leftTab(){
		 var h4s=document.getElementsByClassName('h4');
		 var divs=document.getElementsByClassName('divs');
		 tab(h4s,divs);
	 }
	 rightTab();
	 function rightTab(){
		 var lis=document.getElementsByClassName('li');
		 var divs=document.getElementsByClassName('div');
		 tab(lis,divs);
	 }
	 
	 function rightAside{
		 var  btn=document.getElementsByClassName('btn');
		 var flag=true;
		 var rightAside=document.getElementsByClassName('rightAside');
		 btn.onclick=function(){
			 if(flag){
				 btn.className='btn btnopen';
				 rightAside.className='rightAside open';
			 }else{
				 btn.className='btn btnclose';
				 rightAside.className='rightAside close';
			 }
			 flag=!flag;
		 }
	 }
}