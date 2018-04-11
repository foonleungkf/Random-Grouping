import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedMembersComponent } from './grouped-members.component';

describe('GroupedMembersComponent', () => {
  let component: GroupedMembersComponent;
  let fixture: ComponentFixture<GroupedMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
