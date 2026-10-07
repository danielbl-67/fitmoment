import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LegalTab = 'aviso' | 'privacidad' | 'cancelaciones';

@Component({
  selector: 'app-modal-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-legal.html',
  styleUrl: './modal-legal.css'
})

export class ModalLegal {
  
  @Input() showLegalModal: boolean = false;
  @Input() activeTab: LegalTab = 'aviso';
  @Output() onClose = new EventEmitter<void>();

  setTab(tab: LegalTab): void {
    this.activeTab = tab;
  }

  closeModal(): void {
    this.showLegalModal = false;
    this.onClose.emit();
  }
}