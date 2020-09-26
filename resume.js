"use strict"


/* smooth scroll bar*/
var links=document.querySelectorAll('#body-header .horizontal-list li a');
var startpos;
startpos=0;


for(let i=0;i<7;i++){
	links[i].addEventListener('click',function(event){
		event.preventDefault();
		var link=links[i].getAttribute('href'); //get the a link we are clicking
		var section=document.querySelector(link); // get the section in the link
		var coordinates=section.getBoundingClientRect(); //now get the coordinates of that section
		var endpos=coordinates.y;             //now declare endposition to the y-axis length of the section
		var scroll=setInterval(function(){
			if(startpos>=endpos){
				clearInterval(scroll);
				startpos=0;
				return;
			}
			startpos+=50;
			window.scrollBy(0,50);
		},20);
	});
	
}

/* auto fill bar */
/*all singly */

let progressbar=document.querySelectorAll('.skill-progress > div');


function initializeBar(bar){
	bar.setAttribute("data-visited", false);
	bar.style.width=0 + '%';
}

for (let bar of progressbar) {
    initializeBar(bar);
}

function fillBar(bar){
	let maxwidth=parseFloat(bar.dataset.barWidth);
	let currwidth=0;
	let fill=setInterval(function(){
		if(currwidth>=maxwidth){
			clearInterval(fill);
			currwidth=0;
			return;
		}
		currwidth++;
		bar.style.width=currwidth+ '%';

	},5);
}

function checkscroll(){
	for(let bar of progressbar){
		let coordinates=bar.getBoundingClientRect();
		if(bar.getAttribute("data-visited") == "false" && coordinates.top <= (window.innerHeight)){
			bar.setAttribute("data-visited",true);
			// initializeBar(bar);
			fillBar(bar);
			return;
		}else if(coordinates.top>window.innerHeight){
			bar.setAttribute("data-visited",false);
			initializeBar(bar);
		}
	}
}

window.addEventListener('scroll',checkscroll);



/*all simultaneously */

// var progressbar=document.querySelectorAll('.skill-progress > div');
// let skillcontainer=document.querySelector('#skills');

// window.addEventListener('scroll',checkscroll);

// var animationDone=false;

// function checkscroll(){
// 	var coordinates=skillcontainer.getBoundingClientRect();
// 	if(coordinates.top<=window.innerHeight && !animationDone){
// 		animationDone=true;
// 		//initialize bars
// 		initializeBars();
// 		fillBars();
// 		return;
// 	}else if(coordinates.top>window.innerHeight){
// 		animationDone=false;
// 		initializeBars();
// 	}
// }

// function initializeBars(){
// 	for(var bar of progressbar){
// 		bar.style.width=0 + '%';
// 	}
// }
// function fillBars(){
// 	for(let bar of progressbar){
// 		let maxwidth=parseFloat(bar.dataset.barWidth);
// 		let currwidth=0;
// 		let fill=setInterval(function(){
// 			if(currwidth>=maxwidth){
// 				clearInterval(fill);
// 				currwidth=0;
// 				return;
// 			}
// 			currwidth++;
// 			bar.style.width=currwidth+ '%';

// 		},5);
// 	}
// }



