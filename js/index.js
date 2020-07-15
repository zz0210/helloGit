var container = document.querySelector('.container')
var left = document.querySelector('.left')
var center = document.querySelector('.center')
var right = document.querySelector('.right')
var divList = document.querySelectorAll('.container div')

// 事件委托
// container.addEventListener('click',function(e){
// 	// 只有当作用点不是父级元素 才做事
// 	if(e.target.className != 'container'){
// 		console.log(e.target.innerText)
// 	}
// })

// 循环注册事件
for(var i = 0; i<divList.length;i++){
	
	divList[i].addEventListener('click',function(e){
		console.log(i)
	})
	
	// (function(j){
	// 	divList[j].addEventListener('click',function(e){
	// 		console.log(j)
	// 	})
	// })(i)
	
}

for(var k = 0;k<5;k++){
	setTimeout(function(){
		console.log(k)
	},1)
}
