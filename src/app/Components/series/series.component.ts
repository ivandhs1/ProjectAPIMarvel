import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/Services/series.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  allSeries!: Observable<any>;
  cant:number=20;

  constructor(private serieService: SeriesService) { }

  ngOnInit(): void {
    this.getAllSeries(this.cant);
  }

  getAllSeries(vari:number){
    this.allSeries = this.serieService.getAllSeries(vari);
    console.log(this.allSeries);
  }

  buscar(title:string){
    this.allSeries= this.serieService.getByTitleSerie(title);
    console.log(this.allSeries.forEach(char => console.log(char)));
  }

  obtenerMas(){
    this.cant=this.cant+20;
    this.getAllSeries(this.cant)
  }


}
