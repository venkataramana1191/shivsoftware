import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shivapp';


  items=[
    { "itemname":"APPLICATION DEVELOPMENT","src":"../assets/icons_1.png"},
    { "itemname":"MOBILE APP DEVELOPMENT","src":"../assets/icons_2.png"},
    { "itemname":"UI/UX DEVELOPMENT","src":"../assets/icons_3.png"},
    { "itemname":"QA SERVICES","src":"../assets/icons_4.png"},
    { "itemname":"DATA ANALYTICS","src":"../assets/icons_5.png"},
    { "itemname":"IT INFRASTRUCTURE","src":"../assets/icons_6.png"},
    { "itemname":"CYBER SECURITY","src":"../assets/icons_7.png"},
    { "itemname":"IT CONSULTING","src":"../assets/icons_8.png"}
  ]
}
