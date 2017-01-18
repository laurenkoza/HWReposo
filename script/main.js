(function(){

//need images, heading, subheading, season text, appliedClass
	var images;

var theImages = document.querySelectorAll(".image-holder"),
	heading = document.querySelector(".heading"),
	subheading = document.querySelector(".main-copy h2"),
	paragraph = document.querySelector(".main-copy p"),
	appliedClass;

	function changeElements(){
		heading.classList.remove(appliedClass); //so the colours don't get stuck, removes previous styling
		subheading.classList.remove(appliedClass);
		//debugger;
		appliedClass = this.id;

		heading.classList.add(this.id);
		subheading.classList.add(this.id);
		
		subheading.firstChild.nodeValue = dynamicContent[this.id].headline; //dynamic content is the name of the object
		paragraph.firstChild.nodeValue = dynamicContent[this.id].text;
	}

	[].forEach.call(theImages, function(image){ //for each image variable, run this array/ function
		image.addEventListener('click', changeElements, true);
	});

	subheading.firstChild.nodeValue = dynamicContent['spring'].headline; //changing placeholder text on load
	paragraph.firstChild.nodeValue = dynamicContent['spring'].text;
	heading.classList.add('spring');


})();