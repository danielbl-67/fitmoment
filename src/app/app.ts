import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Item {
  id: string;
  type: 'producto' | 'servicio';
  section: 'suplementacion' | 'fisioterapia' | 'nutricion';
  name: string;
  shortDesc: string;
  price: number;
  image: string;
  badge: string;
  variants?: string[];
  duration?: string;
  features?: string[];
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
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
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

  // 1. SUPLEMENTACIÓN CON IMÁGENES REALES
  suplementos: Item[] = [
    {
      id: 'SP-01',
      type: 'producto',
      section: 'suplementacion',
      name: 'Iso Whey Zero 100% Native (1kg)',
      shortDesc: 'Aislado de proteína de suero no desnaturalizado. 90% proteína pura por dosis.',
      price: 44.90,
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80',
      badge: 'Top Ventas',
      variants: ['Chocolate Belga', 'Vainilla Bourbon', 'Fresa Silvestre']
    },
    {
      id: 'SP-02',
      type: 'producto',
      section: 'suplementacion',
      name: 'Creatina Creapure® Ultramicronizada (300g)',
      shortDesc: 'Sello Creapure con certificación de pureza 99.9%. Aumento de fuerza y potencia.',
      price: 26.50,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80',
      badge: 'Fuerza Pura'
    },
    {
      id: 'SP-03',
      type: 'producto',
      section: 'suplementacion',
      name: 'Pre-Workout Savage Pump Matrix (330g)',
      shortDesc: 'Energía explosiva, vascularización y concentración extrema sin bajón.',
      price: 29.90,
      image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80',
      badge: 'Pre-Entreno',
      variants: ['Blue Razz', 'Manzana Ácida']
    },
    {
      id: 'SP-04',
      type: 'producto',
      section: 'suplementacion',
      name: 'Crema de Cacahuete Tostada 100% (1kg)',
      shortDesc: 'Textura cremosa natural, sin azúcares añadidos ni aceite de palma.',
      price: 7.90,
      image: 'https://images.unsplash.com/photo-1588710929895-d8fcb6a38217?auto=format&fit=crop&w=800&q=80',
      badge: '100% Natural',
      variants: ['Smooth (Suave)', 'Crunchy (Crujiente)']
    },
    {
      id: 'SP-05',
      type: 'producto',
      section: 'suplementacion',
      name: 'Omega 3 Ultra Pure EPA/DHA (120 perlas)',
      shortDesc: 'Aceite de pescado salvaje con destilación molecular. Soporte cardiovascular.',
      price: 18.50,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      badge: 'Salud 360'
    },
    {
      id: 'SP-06',
      type: 'producto',
      section: 'suplementacion',
      name: 'Shaker Fit Moment Pro Black (700ml)',
      shortDesc: 'Mezclador hermético de alta resistencia, libre de BPA y rejilla antigrumos.',
      price: 6.50,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      badge: 'Accesorio'
    }
  ];

  // 2. FISIOTERAPIA
  fisioterapiaPlanes: Item[] = [
    {
      id: 'FS-01',
      type: 'servicio',
      section: 'fisioterapia',
      name: 'Sesión Fisioterapia Deportiva y Descarga',
      shortDesc: 'Terapia manual intensiva, punción seca y neuromodulación para sobrecargas.',
      price: 42.00,
      duration: '50 min',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      badge: 'Recomendado',
      features: ['Evaluación previa rápida', 'Punción seca / electroterapia', 'Descarga muscular miofascial']
    },
    {
      id: 'FS-02',
      type: 'servicio',
      section: 'fisioterapia',
      name: 'Diagnóstico Lesional y Valoración Biomecánica',
      shortDesc: 'Anamnesis completa, ecografía de control y test de rango articular.',
      price: 45.00,
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      badge: 'Primera Consulta',
      features: ['Informe clínico lesional', 'Pautas posturales', 'Test de movilidad articular']
    },
    {
      id: 'FS-03',
      type: 'servicio',
      section: 'fisioterapia',
      name: 'Readaptación Físico-Deportiva',
      shortDesc: 'Sesión activa en sala guiada para volver a entrenar sin recaídas.',
      price: 40.00,
      duration: '50 min',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
      badge: 'Retorno Seguro',
      features: ['Trabajo de fuerza excéntrica', 'Control neuromuscular', 'Transferencia al deporte']
    },
    {
      id: 'FS-04',
      type: 'servicio',
      section: 'fisioterapia',
      name: 'Bono 5 Sesiones Continuas de Fisioterapia',
      shortDesc: 'Tratamiento rehabilitador integral o mantenimiento mensual con precio reducido.',
      price: 190.00,
      duration: '5 x 50 min',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      badge: 'Ahorro Bono',
      features: ['Válido durante 6 meses', 'Transferible a familiares', 'Seguimiento por WhatsApp']
    }
  ];

  // 3. ASESORAMIENTO NUTRICIONAL Y DEPORTIVO
  nutricionPlanes: Item[] = [
    {
      id: 'ND-01',
      type: 'servicio',
      section: 'nutricion',
      name: 'Plan Nutricional Inicial + Antropometría',
      shortDesc: 'Medición de pliegues grasos corporal (ISAK) y confección de menú a medida.',
      price: 50.00,
      duration: 'Consulta 60 min',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      badge: 'Punto de Partida',
      features: ['Menús adaptados a tus gustos', 'Lista de la compra recomendada', 'Estrategia de suplementación']
    },
    {
      id: 'ND-02',
      type: 'servicio',
      section: 'nutricion',
      name: 'Planificación de Entrenamiento Mensual',
      shortDesc: 'Rutina individualizada según tu material disponible, lesiones y horarios.',
      price: 45.00,
      duration: 'Mes Completo',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      badge: 'Alto Rendimiento',
      features: ['Vídeos explicativos de ejercicios', 'Progresión de cargas periódica', 'Resolución de dudas semanal']
    },
    {
      id: 'ND-03',
      type: 'servicio',
      section: 'nutricion',
      name: 'Pack Integral: Nutrición + Entrenamiento',
      shortDesc: 'El servicio más completo. Sinergia total entre nutrición y rendimiento físico.',
      price: 80.00,
      duration: 'Plan Mensual 360°',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
      badge: 'El Más Demandado',
      features: ['Ajustes quincenales según evolución', 'Contacto prioritario WhatsApp', 'Optimización metabólica']
    },
    {
      id: 'ND-04',
      type: 'servicio',
      section: 'nutricion',
      name: 'Revisión y Seguimiento Quincenal',
      shortDesc: 'Medición antropométrica de evolución y ajustes en macronutrientes.',
      price: 30.00,
      duration: 'Consulta 30 min',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      badge: 'Constancia',
      features: ['Reevaluación de metas', 'Variación de alimentos', 'Soporte continuo']
    }
  ];

  openModal(item: Item) {
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
    if (this.order.notes) msg += `- Observaciones: ${this.order.notes}\n`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/34638676954?text=${encoded}`, '_blank');
    this.closeModal();
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}