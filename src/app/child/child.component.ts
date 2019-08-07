import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() nameEvent = new EventEmitter<string>();
  @Output() phoneEvent = new EventEmitter<string>();

  userName: string = '';
  userPhone: string = '';

  onNameChange () {
    this.nameEvent.emit(this.userName);
  }

  onPhoneChange () {
    this.phoneEvent.emit(this.userPhone);
  }
  constructor() { }

  ngOnInit() {
  }

}
