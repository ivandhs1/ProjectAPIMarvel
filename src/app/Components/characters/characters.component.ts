import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../Services/characters.service'
import { Observable } from 'rxjs';
import { CharacterComponent } from '../subComponents/character/character.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharacterService,public dialog: MatDialog) { }
  allCharacters!: Observable<any>;
  cant:number=20;
  public getScreenWidth: any;
  public getScreenHeight: any;
  

  ngOnInit(): void {
    this.getCharacters(this.cant);
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  getCharacters(vari:number){
    this.allCharacters = this.characterService.getAllCharacters(vari);
    console.log(this.allCharacters);
    
  }

  buscar(name:string){
    console.log(name);
    
    this.allCharacters = this.characterService.getByName(name);
    console.log(this.allCharacters.forEach(char => console.log(char)));
    
  }

  openDialog(character:any): void {

    if(this.getScreenWidth<=1600){
      const dialogRef = this.dialog.open(CharacterComponent, {
        width: '60vw',
        data: {character},
      });
    }else if(this.getScreenWidth<=1100){
      const dialogRef = this.dialog.open(CharacterComponent, {
        width: '100vw',
        data: {character},
      });
    }else if(this.getScreenWidth<=800){
      const dialogRef = this.dialog.open(CharacterComponent, {
        width: '95vw',
        data: {character},
      });
    } else if(this.getScreenWidth<=600){
    const dialogRef = this.dialog.open(CharacterComponent, {
      width: '100vw',
      data: {character},
    });
    } else {
      const dialogRef = this.dialog.open(CharacterComponent, {
        width: '50vw',
        data: {character},
      });
    }


    console.log("dsds");

  }

  obtenerMas(){
    this.cant=this.cant+20;
    this.getCharacters(this.cant)
  }



}
