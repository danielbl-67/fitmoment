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