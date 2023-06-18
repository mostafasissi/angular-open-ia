import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app-chatgpt';

  actions : any[] = [
    {
      route : '/home' , 
      title : 'HOME' ,
      icon : 'house'
    },
    {
      route  : '/gpt',
      title : 'GPT',
      icon : 'person'
    }
  ];
  currentAction !: any ; 
  constructor(private  router : Router) {
    
  }
  handleRoute(action : any) :void {
    this.currentAction = action ; 
    this.router.navigateByUrl(action.route);
  }
}
