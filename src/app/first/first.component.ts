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

  data;
  vowels = ['a', 'e', 'i', 'o', 'u'];

  kika;
  calculateData(event){
    let text = event.target.value;
    let dd = [0,0,0,0,0]

    for(let i = 0; i<text.length; i++){
      switch(text[i]){
        case 'a': dd[0]++; break;
        case 'e': dd[1]++; break;
        case 'i': dd[2]++; break;
        case 'o': dd[3]++; break;
        case 'u': dd[4]++; 
      }
    }
    this.data = dd;
  }

  


}
