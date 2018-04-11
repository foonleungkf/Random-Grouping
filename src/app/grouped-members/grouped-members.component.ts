import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'grouped-members',
  templateUrl: './grouped-members.component.html',
  styleUrls: ['./grouped-members.component.css']
})
export class GroupedMembersComponent implements OnInit {
  
  @Input()
  groupNum : string;
  @Input()
  members : string;
  
  constructor() { }

  ngOnInit() { }

}
