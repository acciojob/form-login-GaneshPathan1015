function getFormvalue() {
    //Write your code here
	const form1 = document.getElementById("form1");
	let str = form1.elements.fname.value+" " + form1.elements.lname.value
	alert(str);

}
