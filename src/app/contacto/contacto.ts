import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})

export class Contacto {
  phone: string = '+34 638676954';
  email: string = 'info@fitmoment.es';
  instagram: string = '@fitmoment.official';
  instagramUrl: string = 'https://www.instagram.com/fitmoment.official';
  whatsappUrl: string = 'https://wa.me/34638676954?text=Hola%20Fit%20Moment,%20tengo%20una%20consulta.';
  mapsUrl: string = 'https://www.google.com/maps/place/Fit+Moment/@37.3828737,-6.0872817,17z/data=!3m1!4b1!4m6!3m5!1s0xd1213e16d5683bd:0xe74e4db6d64fc0ad!8m2!3d37.3828737!4d-6.0847068!16s%2Fg%2F11zysn59wr?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D';
  address: string = 'Fit Moment — Centro de Rendimiento, Suplementación & Fisioterapia (Sevilla, España)';
}