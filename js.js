var start = document.getElementById("start");
var stop = document.getElementById("stop");

var contain = document.getElementById("contain");
var list = contain.children;//contain的所有element子元素，即9个格子
var length = list.length-1;

var a=1;
start.addEventListener("click",startL);
stop.addEventListener("click",stopL);



var times;
//开始闪烁事件
function startL(){
	times = window.setInterval("Light(list,length)",1000);
}
//停止闪烁事件
function stopL(){
	window.clearInterval(times);
	for(var i=0;i<length;i++){
		var div = list.item(i);
		div.style.background = "rgb(255,166,0)";
	}
}

var divArr = new Array();//存储被选中的div
//随机选中三个div设置颜色
function Light(list1,length1){
	while(divArr.length!=0){
		divArr.pop().style.background="rgb(255,166,0)";
	}

	var numArr = new Array();
  for(var i=1;i<4;i++){
    var num = number(length1);
    while(numArr[num]){  // 产生3个不能重复的随机数
        num = number(length1);
    }
    numArr[num] = true;
    var div = list1.item(num);
    div.style.background = color();
    divArr.push(div);
  }

  
}

//生成随机颜色
function color(){
	var red = Math.random() * 255;
	var green = Math.random() * 255;
	var blue = Math.random() * 255;
	var color="rgb("+Math.floor(red)+","+Math.floor(green)+","+Math.floor(blue)+")";
	return color;
}

//生成随机数字
function number(length){
	var i = Math.random() * length;
	 return Math.floor(i);
}