(function(){

//need images, heading, subheading, season text, appliedClass
	var images;

/* Vanilla JS
	var theImages = document.querySelectorAll(".image-holder"),
		heading = document.querySelector(".heading"),
		subheading = document.querySelector(".main-copy h2"),
		paragraph = document.querySelector(".main-copy p"),
		appliedClass;
		*/

//jQuery
var $theImages = $(".image-holder"),
	$heading = $('.heading'),
	$subheading = $('.main-copy h2'),
	$paragraph = $('.main-copy p'),
	appliedClass;

/* Vanilla JS
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
*/

//jQuery
	function changeElements(){
		$heading.removeClass(appliedClass); //so the colours don't get stuck, removes previous styling
		$subheading.removeClass(appliedClass);
		//debugger;
		appliedClass = event.currentTarget.id;

		$heading.addClass(event.currentTarget.id);
		$subheading.addClass(event.currentTarget.id);
		
		$subheading.text(dynamicContent[event.currentTarget.id].headline); //dynamic content is the name of the object
		$paragraph.text(dynamicContent[event.currentTarget.id].text);
	}


	$theImages.click(function(){ //jQuery event listener, on click run this function
		//console.log("clicked!");
		changeElements();
	});


/* Vanilla JS
	[].forEach.call(theImages, function(image){ //for each image variable, run this array/ function
		image.addEventListener('click', changeElements, true);
	});
*/

	$subheading.text(dynamicContent['spring'].headline); //changing placeholder text
	$paragraph.text(dynamicContent['spring'].text);
	$heading.addClass('spring');


})();