import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/Services/comics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  allComics!: Observable<any>;
  cant:number=20;

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.getAllComics(this.cant);
  }

  getAllComics(vari:number){
    this.allComics = this.comicService.getAllComics(vari);
    console.log(this.allComics.forEach(char => console.log(char)));
  }

  buscar(title:string){
    this.allComics= this.comicService.getByTitleComic(title);
    console.log(this.allComics.forEach(char => console.log(char)));
  }

  obtenerMas(){
    this.cant=this.cant+20;
    this.getAllComics(this.cant)
  }

}
