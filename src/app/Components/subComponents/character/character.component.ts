import { Component, OnInit, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  @Input() personaje!: any;

  public character!:any;
  public show = false;

  options!: any[];
  optA: string="true";
  optB: string="true";
  optC: string="true";

  constructor() { }


  ngOnInit(): void {
   
  }

  showModal(character:any){
    this.show=true;
    this.character= character;
    this.options=[];
    this.optionSearch(1);
  }

  hideModal(){
    this.show=false;
  }

  optionSearch(opt:number){
    if(opt==1){
        this.options=this.character.comics.items;
        this.optA ="false";
        this.optB ="true";
        this.optC ="true";
    }else if(opt==2){
        this.options=this.character.series.items;
        this.optA ="true";
        this.optB ="false";
        this.optC ="true";
    }else if(opt==3){
        this.options=this.character.stories.items;
        this.optA ="true";
        this.optB ="true";
        this.optC ="false";
    }
  }

}
