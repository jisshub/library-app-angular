import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digital-library-app';

  // set a current feature
  currentFeature: string = "books"
  // get the emitted data from header
  OnEmitted(selectedF: string){
    this.currentFeature = selectedF;
  }
}
