function showPic(whickpic) {
	var source  = whickpic.getAttribute("href")
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whickpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue=text;

}