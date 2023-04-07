import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  MENU!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.MENU=false;
  }

  menu(){
    this.MENU = !this.MENU;
  }

}
