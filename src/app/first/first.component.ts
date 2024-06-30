import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  actualShape = 'rectangle';
  actualShapeColor = 'red';

  actualShapeStyle = this.sharedService.drawShape(this.actualShape, this.actualShapeColor);
  
  changeShape(event){
    this.actualShape = event.target.value;
  }
  
  changeShapeColor(event){
    this.actualShapeColor = event.target.value;
  }

  drawShape(){
    this.actualShapeStyle=this.sharedService.drawShape(this.actualShape, this.actualShapeColor);
  }

/*
firstNum = 0;
  secondNum = 0;
  output = 0;
  calculate(){
    this.output = this.sharedService.calculate(this.firstNum, this.secondNum);
    this.sharedService.firstPageValue = this.output;
  }
*/
}
