$(function(){
$('#address').focus(function(){
	var txtValue=$(this).val();
	if(txtValue=="邮箱地址"){
		$(this).val("");
	}
});

$('#address').blur(function(){
	var txtValue=$(this).val();
	if(txtValue==""){
		$(this).val("邮箱地址");
	}
});

$('#password').focus(function(){
	var txtValue=$(this).val();
	if(txtValue=="密码"){
		$(this).val("");
	}
});

$('#password').blur(function(){
	var txtValue=$(this).val();
	if(txtValue==""){
		$(this).val("密码");
	}
});

var x=10;
var y=20;
$('a.tip').onmouseover(function(e){
	
})
});
