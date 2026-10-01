import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.model';

@Component({
  selector: 'app-asesoramiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asesoramiento.html',
  styleUrls: ['./asesoramiento.css']
})
export class Asesoramiento {
  @Output() onSelect = new EventEmitter<Item>();

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

  openModal(plan: Item) {
    this.onSelect.emit(plan);
  }
}