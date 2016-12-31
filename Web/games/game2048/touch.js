var ds=document.getElementById("newgamebutton");
function cli(el,fn){
	var starx,stary,endx,endy;
	el.addEventListener('touchstart',function (e){
		var tces=e.touches[0];
		starx=tces.clientX;
		stary=tces.clientY;
	},false);
	el.addEventListener('touchend',function (e){
		var tces=e.changedTouches[0];
		endx=tces.clientX;
		endy=tces.clientY;
		if(Math.abs(endx-starx)<6||Math.abs(endy-stary)<6){
			fn();
		}
	},false)
}
cli(ds,function(){
	newgame();
})