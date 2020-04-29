import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // emit the feautre chosen to the app componnt
  @Output() featureChosen = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(getFeature: string ){
    this.featureChosen.emit(getFeature);
  }   


}
