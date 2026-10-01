import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-legal.html',
  styleUrls: ['./modal-legal.css']
})
export class ModalLegal {
  // Permite que el padre le pase si está abierto, o abrirlo internamente
  @Input() showLegalModal: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.showLegalModal = false;
    this.onClose.emit();
  }
}