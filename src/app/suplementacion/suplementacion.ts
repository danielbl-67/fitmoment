import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item.model';

@Component({
  selector: 'app-suplementacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suplementacion.html',
  styleUrls: ['./suplementacion.css']
})

export class Suplementacion {
  @Output() onSelect = new EventEmitter<Item>();

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
      image: 'https://plus.unsplash.com/premium_photo-1701210417955-d1b61e1dc9eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

  openModal(item: Item) {
    this.onSelect.emit(item);
  }
}