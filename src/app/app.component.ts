import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  firstName = 'Mohamed Amine';
  imgPath = 'kika.png';

  passValueToComponent(e){
    console.log(e.target.value);
  }

  defaultValue = 'Default';
  defaultGreeting = 'Hello';
  isButtonDisabled = false;
  
  check(){
    this.isButtonDisabled = (this.defaultGreeting == 'Salam')
  }
}
