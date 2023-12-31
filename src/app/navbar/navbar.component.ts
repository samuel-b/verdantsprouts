import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  myFunction() {
    var x = document.getElementById('navbar');
    if (x?.className === 'navbar') {
      x.className += ' responsive';
    } else {
      x!.className = 'navbar';
    }
  }
}
