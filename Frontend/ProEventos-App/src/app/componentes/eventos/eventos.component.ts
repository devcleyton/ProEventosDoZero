import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  modalRef?: BsModalRef;

  public eventos: Evento[] = [];
  public eventosfiltrados: Evento[] = [];
  public widthImg: number = 100;
  public marginImg: number = 2;
  public showImg: boolean = true;
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

  public listafiltrada(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getEventos();
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (_eventos: Evento[]) => {
        (this.eventos = _eventos), (this.eventosfiltrados = this.eventos);
        this.toastr.success(
          `${this.eventos.length} eventos carregados!`,
          `Você está conectado!`,
          {
            positionClass: 'toast-bottom-right',
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
          }
        );
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Você está desconectado', 'Erro!', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          closeButton: true,
        });
      },
      complete: () => this.spinner.hide(),
    });
  }

  public showingImg(): void {
    this.showImg = !this.showImg;
    console.log('executando');
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.error('Evento deletado', 'Você deletou o evento!', {
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
    });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  showSuccess() {
    this.toastr.info('Toast Criado', 'Yes!', {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    });
  }

  editEvento(id: number): void {
    this.router.navigate([`detalhe/edit/${id}`]);
  }

  detalheEvento(id: string): void {
    this.router.navigate([`detalhe/${id}`]);
  }

  novoEvento(): void {
    this.router.navigate([`novo`]);
  }
}
