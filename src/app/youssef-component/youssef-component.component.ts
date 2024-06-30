import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-youssef-component',
  templateUrl: './youssef-component.component.html',
  styleUrls: ['./youssef-component.component.css']
})
export class YoussefComponentComponent implements OnInit {

  @ViewChild('myInput', {static: true}) myCustomInput;

  constructor() { }

  ngOnInit(): void {
    this.myCustomInput.nativeElement.focus();
  }



  sendInput(input1, input2){
    console.log(input1.value);
    console.log(input2.innerText);
  }

}
