import { Component, OnInit, ViewChildren } from '@angular/core';
import { GroupedMembersComponent } from './grouped-members/grouped-members.component';

@Component({
   selector: 'app-maincontent',
   templateUrl: './maincontent.component.html',
   styleUrls: ['./maincontent.component.css']
})

export class MainContentComponent implements OnInit {
   
   groups = [];
   member_input_text = "";
   openFile(event) {
   	let input = event.target;
   	var text = ""
   	for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            text = reader.result;
			text = text.split("\n");
            this.member_input_text = text
        }
        reader.readAsText(input.files[index]);
    };
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
	   			console.log(i)
	   			console.log(inputMembersArray.length)
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