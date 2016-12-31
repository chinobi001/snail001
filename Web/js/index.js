var ds=document.getElementById("span");
var clik={
	cli: function (el,fn){
			var starx,stary,endx,endy;
			el.addEventListener('touchstart',function (e){
				var tces=e.touches[0];
				starx=tces.clientX;
				stary=tces.clientY;
				console.log(starx);
				console.log(stary);
			},false);
			el.addEventListener('touchend',function (e){
				var tces=e.changedTouches[0];
				endx=tces.clientX;
				endy=tces.clientY;
				console.log(endx);
				console.log(endy);
				if(Math.abs(endx-starx)<6||Math.abs(endy-stary)<6){
					fn();
				}
			},false)
		}
}
clik.cli(ds,function (){
	window.location.href="games/game2048/index.html";
})
		