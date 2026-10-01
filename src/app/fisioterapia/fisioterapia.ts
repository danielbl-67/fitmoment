import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.model';

@Component({
  selector: 'app-fisioterapia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fisioterapia.html',
  styleUrls: ['./fisioterapia.css']
})

export class Fisioterapia {
  @Output() onSelect = new EventEmitter<Item>();

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

  openModal(plan: Item) {
    this.onSelect.emit(plan);
  }
}