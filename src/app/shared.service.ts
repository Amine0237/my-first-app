import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  firstPageValue = 0;

  calculate(firstNum, secondNum){
    return firstNum+secondNum;
  }

  constructor() { }

  drawShape(actualShape, actualShapeColor){
    return {height:"100px", 
      margin:"10px 0", 
      borderRadius: actualShape === 'circle'?'50% 50%':'0', 
      width: actualShape === 'rectangle'?'300px':'100px',
      backgroundColor: actualShapeColor
    };
  }
}
