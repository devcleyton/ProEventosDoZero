import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  public eventosfiltrados: any = [];
  widthImg: number = 100;
  marginImg: number = 2;
  showImg: boolean = true;
  private _filtrolista: string = '';

  public get filtrolista(): string {
    return this._filtrolista;
  }

  public set filtrolista(value: string) {
    this._filtrolista = value;
    this.eventosfiltrados = this.filtrolista
      ? this.listafiltrada(this.filtrolista)
      : this.eventos;
  }

  listafiltrada(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/evento').subscribe(
      (response) => {
        (this.eventos = response), (this.eventosfiltrados = this.eventos);
      },
      (error) => console.log(error)
    );
  }

  showingImg(): void {
    this.showImg = !this.showImg;
    console.log('executando');
  }
}
