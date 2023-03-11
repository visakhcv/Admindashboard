import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggle  = new EventEmitter()
  menuiconclicked(){
    this.toggle.emit()
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
      
    }, 100);
  }
}
