import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type ItemCategory = 'suplementacion' | 'fisioterapia' | 'nutricion_deporte';
export type ItemType = 'producto' | 'servicio';

export interface CatalogItem {
  id: string;
  type: ItemType;
  category: ItemCategory;
  name: string;
  shortDesc: string;
  price: number;
  variants?: string[];
}

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
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent {
  selectedCategory: string = 'todos';
  selectedItem: CatalogItem | null = null;

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

  catalog: CatalogItem[] = [
    // Suplementación
    { id: 'SP-01', type: 'producto', category: 'suplementacion', name: 'Iso Whey Zero 100% Native (1kg)', shortDesc: 'Proteína aislada de máxima asimilación.', price: 44.90, variants: ['Chocolate Belga', 'Vainilla', 'Fresa'] },
    { id: 'SP-02', type: 'producto', category: 'suplementacion', name: 'Creatina Creapure (300g)', shortDesc: 'Fuerza, recuperación y potencia muscular.', price: 26.50 },
    { id: 'SP-03', type: 'producto', category: 'suplementacion', name: 'Pre-Workout Stim Matrix (330g)', shortDesc: 'Energía explosiva, vascularización y concentración.', price: 29.90, variants: ['Blue Razz', 'Manzana Ácida'] },
    { id: 'SP-04', type: 'producto', category: 'suplementacion', name: 'Harina de Avena Micronizada (1kg)', shortDesc: 'Carbohidratos limpios de absorción sostenida.', price: 5.95, variants: ['Galleta María', 'Brownie'] },
    { id: 'SP-05', type: 'producto', category: 'suplementacion', name: 'Crema de Cacahuete 100% (1kg)', shortDesc: 'Proteína y grasas monoinsaturadas sin aceites de palma.', price: 7.90, variants: ['Suave', 'Crunchy'] },
    { id: 'SP-06', type: 'producto', category: 'suplementacion', name: 'Multivitamínico Mineral Pro (90 caps)', shortDesc: 'Refuerzo inmunológico y soporte metabólico.', price: 15.90 },
    { id: 'SP-07', type: 'producto', category: 'suplementacion', name: 'Omega 3 Ultra Pure (120 perlas)', shortDesc: 'Ácidos grasos EPA/DHA concentrados.', price: 18.50 },
    { id: 'SP-08', type: 'producto', category: 'suplementacion', name: 'Ashwagandha KSM-66 (60 caps)', shortDesc: 'Control de cortisol, estrés y descanso muscular.', price: 16.90 },
    { id: 'SP-09', type: 'producto', category: 'suplementacion', name: 'BCAA + Glutamina 8:1:1 (500g)', shortDesc: 'Protección muscular frente a sesiones intensas.', price: 24.50, variants: ['Frutas del Bosque', 'Limón'] },
    { id: 'SP-10', type: 'producto', category: 'suplementacion', name: 'Shaker Pro Fit Moment (700ml)', shortDesc: 'Antigoteo, negro mate, libre de BPA.', price: 6.50 },

    // Fisioterapia
    { id: 'FS-01', type: 'servicio', category: 'fisioterapia', name: 'Sesión Fisioterapia Deportiva (50 min)', shortDesc: 'Descarga muscular, terapia manual y punción seca.', price: 42.00 },
    { id: 'FS-02', type: 'servicio', category: 'fisioterapia', name: 'Valoración y Diagnóstico Lesional', shortDesc: '60 min con anamnesis y pruebas articulares y musculares.', price: 45.00 },
    { id: 'FS-03', type: 'servicio', category: 'fisioterapia', name: 'Readaptación Físico-Deportiva', shortDesc: '50 min con prescripción de ejercicios para retorno activo.', price: 40.00 },
    { id: 'FS-04', type: 'servicio', category: 'fisioterapia', name: 'Bono 5 Sesiones de Fisioterapia', shortDesc: 'Tratamiento continuado a precio reducido.', price: 190.00 },
    { id: 'FS-05', type: 'servicio', category: 'fisioterapia', name: 'Masaje Descontracturante Profundo (45 min)', shortDesc: 'Alivio rápido de espalda, escápulas y trapecios.', price: 38.00 },

    // Nutrición & Deporte
    { id: 'ND-01', type: 'servicio', category: 'nutricion_deporte', name: 'Plan Nutricional Inicial + Antropometría', shortDesc: 'Plicometría y diseño de dieta adaptada a tu estilo de vida.', price: 50.00 },
    { id: 'ND-02', type: 'servicio', category: 'nutricion_deporte', name: 'Seguimiento Nutricional Quincenal', shortDesc: 'Revisión y reajuste de macros según progreso.', price: 30.00 },
    { id: 'ND-03', type: 'servicio', category: 'nutricion_deporte', name: 'Planificación de Entrenamiento Mensual', shortDesc: 'Rutina individualizada en base a tus objetivos.', price: 45.00 },
    { id: 'ND-04', type: 'servicio', category: 'nutricion_deporte', name: 'Pack Integral: Nutrición + Entrenamiento', shortDesc: 'Asesoramiento 360° con contacto y revisiones semanales.', price: 80.00 },
    { id: 'ND-05', type: 'servicio', category: 'nutricion_deporte', name: 'Asesoría en Suplementación Específica', shortDesc: 'Optimización de ingestas ergogénicas seguras y analíticas.', price: 25.00 }
  ];

  get filteredItems(): CatalogItem[] {
    if (this.selectedCategory === 'todos') return this.catalog;
    return this.catalog.filter(i => i.category === this.selectedCategory);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  openModal(item: CatalogItem) {
    this.selectedItem = item;
    this.order = {
      fullName: '',
      phone: '',
      email: '',
      notes: '',
      date: '',
      time: '',
      variant: item.variants ? item.variants[0] : '',
      quantity: 1
    };
  }

  closeModal() {
    this.selectedItem = null;
  }

  submitOrder() {
    if (!this.selectedItem) return;

    const isService = this.selectedItem.type === 'servicio';
    const total = (this.selectedItem.price * this.order.quantity).toFixed(2);

    let msg = `*NUEVA SOLICITUD - FIT MOMENT*\n\n`;
    msg += `*Tipo:* ${isService ? 'Reserva de Cita' : 'Encargo de Producto'}\n`;
    msg += `*Concepto:* ${this.selectedItem.name}\n`;
    
    if (!isService && this.order.variant) {
      msg += `*Opción/Sabor:* ${this.order.variant}\n`;
    }
    if (!isService) {
      msg += `*Cantidad:* ${this.order.quantity}\n`;
    }
    if (isService) {
      msg += `*Fecha deseada:* ${this.order.date || 'A concretar'}\n`;
      msg += `*Hora orientativa:* ${this.order.time || 'A concretar'}\n`;
    }

    msg += `*Total estimado:* ${total} € (Pago en el local)\n\n`;
    msg += `*Datos del Cliente:*\n`;
    msg += `- Nombre: ${this.order.fullName}\n`;
    msg += `- Teléfono: ${this.order.phone}\n`;
    msg += `- Email: ${this.order.email}\n`;
    if (this.order.notes) msg += `- Notas: ${this.order.notes}\n`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/34638676954?text=${encoded}`, '_blank');
    this.closeModal();
  }
}