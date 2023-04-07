import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  options!: any[];
  optA: string="true";
  optB: string="true";
  optC: string="true";

  constructor(
    public dialogRef: MatDialogRef<CharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public character:any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.character);
    this.optionSearch(1);
    
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  optionSearch(opt:number){
    if(opt==1){
        this.options=this.character.character.comics.items;
        this.optA ="false";
        this.optB ="true";
        this.optC ="true";
    }else if(opt==2){
        this.options=this.character.character.series.items;
        this.optA ="true";
        this.optB ="false";
        this.optC ="true";
    }else if(opt==3){
        this.options=this.character.character.stories.items;
        this.optA ="true";
        this.optB ="true";
        this.optC ="false";
    }
  }

}
