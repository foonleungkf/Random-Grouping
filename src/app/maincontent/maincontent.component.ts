import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
   selector: 'app-maincontent',
   templateUrl: './maincontent.component.html',
   styleUrls: ['./maincontent.component.css']
})

export class MainContentComponent {
   
   groups = [];
   member_input_text = "";
   openFile(event) {
   	let input = event.target;
   	let file = event.target.files;
   	var textArray;
   	var text = "";

   	if (file[0].name != undefined) {

	   	if (!this.validateFile(file[0].name)) {
	   		alert("Selected files format is not support");
	   		return;
	   	}

	   	for (var index = 0; index < input.files.length; index++) {
	        let reader = new FileReader();
	        reader.onload = () => {
	            // this 'text' is the content of the file
	            text = reader.result;
				textArray = text.split("\n");
				console.log(textArray)
	            
	            var member_input = "";
	            for(var i=0; i<textArray.length; i++){
	            	if (i==0) {
	            		member_input = textArray[i];
	            	}
	            	if (textArray[i] != ""){
	            		member_input = member_input + "," + textArray[i];
	            	}
	            }

	            this.member_input_text = member_input
	        }
	        reader.readAsText(input.files[index]);
	    };
	   }
	}

   validateFile(name: String) {
   	var ext = name.substring(name.lastIndexOf('.') + 1);
   	if (ext.toLowerCase() == 'csv') {
   		return true;
   	}
   	else {
   		return false;
   	}
   }

   onClickGroupMember(inputMembers: string, groupPeopleNum){

   		this.groups = [];
   		if (inputMembers == "" || groupPeopleNum == "" || groupPeopleNum < 0){
   			alert("Invalid Input. Please try again");
   			return;
   		}

	   	var inputMembersArray = inputMembers.split(",");
	   	//random the sorting of the members
	   	for (var i=0; i<inputMembersArray.length; i++){
	   		var pos = Math.floor((Math.random() * inputMembersArray.length));
	   		var temp = inputMembersArray[i];
	   		inputMembersArray[i] = inputMembersArray[pos];
	   		inputMembersArray[pos] = temp;
	   	}

	   	var groupMembers = []

	   	for (var i=1; i<=inputMembersArray.length; i++){
	   		if (i%groupPeopleNum == 0) {
	   			groupMembers.push(inputMembersArray[i-1]);	  
	   			var group = {
	   				groupNum: i/groupPeopleNum,
	   				groupMembers: groupMembers
	   			}
	   			this.groups.push(group)
	   			groupMembers = []
	   		} else {
	   			groupMembers.push(inputMembersArray[i-1]);
	   			// console.log(i)
	   			// console.log(inputMembersArray.length)
	   			//if last members in array
	   			if (i == inputMembersArray.length){
	   				var group = {
		   				groupNum: Math.round(i/groupPeopleNum),
		   				groupMembers: groupMembers
	   				}
	   				this.groups.push(group)
	   			}
	   		}
	   	}
   }   
}