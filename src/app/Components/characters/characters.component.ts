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

  public varr!: boolean;
  
  ngOnInit(): void {
    this.getCharacters(this.cant);
    this.varr=false;
  }

  getCharacters(vari:number){
    this.allCharacters = this.characterService.getAllCharacters(vari);
  }

  buscar(name:string){
    this.allCharacters = this.characterService.getByName(name);
  }

  obtenerMas(){
    this.cant=this.cant+20;
    this.getCharacters(this.cant)
  }



}
