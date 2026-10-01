import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from './item.model';

// Importación de componentes modulares
import { Suplementacion } from './suplementacion/suplementacion';
import { Fisioterapia } from './fisioterapia/fisioterapia';
import { Asesoramiento } from './asesoramiento/asesoramiento';
import { ModalLegal } from './modal-legal/modal-legal';
import { Navbar } from './navbar/navbar';
import { Contacto } from './contacto/contacto';

export interface UserOrder {
  fullName: string;
  phone: string;
  email: string;
  notes: string;
  date: string;
  time: string;
  variant: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Suplementacion,
    Navbar,
    Fisioterapia,
    Asesoramiento,
    ModalLegal,
    Contacto
],
  templateUrl: './app.html',
  styleUrl: './app.css' // Angular 19 usa styleUrl en singular
})
export class App {
  showLegalModal: boolean = false;
  selectedItem: Item | null = null;

  order: UserOrder = {
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    date: '',
    time: '',
    variant: '',
    quantity: 1
  };

  openModal(item: Item): void {
    this.selectedItem = item;
    this.order = {
      fullName: '',
      phone: '',
      email: '',
      notes: '',
      date: '',
      time: '',
      variant: item.variants && item.variants.length > 0 ? item.variants[0] : '',
      quantity: 1
    };
  }

  closeModal(): void {
    this.selectedItem = null;
  }

  submitOrder(): void {
    if (!this.selectedItem) return;

    const isService = this.selectedItem.type === 'servicio';
    const total = (this.selectedItem.price * this.order.quantity).toFixed(2);

    let msg = `*SOLICITUD WEB - FIT MOMENT*\n\n`;
    msg += `*Tipo:* ${isService ? 'Reserva de Sesión/Plan' : 'Encargo de Suplementación'}\n`;
    msg += `*Concepto:* ${this.selectedItem.name}\n`;

    if (!isService && this.order.variant) {
      msg += `*Sabor/Opción:* ${this.order.variant}\n`;
    }
    if (!isService) {
      msg += `*Cantidad:* ${this.order.quantity}\n`;
    }
    if (isService) {
      msg += `*Fecha sugerida:* ${this.order.date || 'A concretar'}\n`;
      msg += `*Hora sugerida:* ${this.order.time || 'A concretar'}\n`;
    }

    
    msg += `*Total estimado:* ${total} € (Abono en local)\n\n`;
    msg += `*Datos del Cliente:*\n`;
    msg += `- Nombre: ${this.order.fullName}\n`;
    msg += `- Teléfono: ${this.order.phone}\n`;
    msg += `- Email: ${this.order.email}\n`;
    if (this.order.notes) {
      msg += `- Observaciones: ${this.order.notes}\n`;
    }

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/34638676954?text=${encoded}`, '_blank');
    this.closeModal();
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}