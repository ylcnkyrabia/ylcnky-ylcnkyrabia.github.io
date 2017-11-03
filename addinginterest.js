var interestList = document.getElementById("interestList");

var newInterest = document.getElementById("newInterest_txt");

var addItem_bttn = document.getElementById("addItem_bttn");

function addItem(event){
	var inputVal = newInterest_txt.value;


}

	var newInterestItem = document.createElement("li");
	interestList.appendChild(newInterestItem);

	var textInput_value = newInterest_txt.value 

	var uniqueId = new Date();

	newInterestItem.innerHTML = "<input name= 'interestList' id='checkbox" + uniqueId.getTime() + " type='checkbox'>" + inputVal;


addItem_bttn.addEventListener("click" , addItem);