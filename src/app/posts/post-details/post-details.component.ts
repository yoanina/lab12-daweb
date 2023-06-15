import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number | null = null;
  posts = [
    { id: 1, title: 'Viajes a Cataratas del Niagara ', content: '¡Viaje a las Cataratas del Niágara con un 50% de descuento! No te pierdas esta increíble oferta de viaje a las majestuosas Cataratas del Niágara. Disfruta de la belleza natural de este destino, maravíllate con las imponentes cascadas, vive momentos únicos y reserva ahora para vivir una experiencia inolvidable. ¡Plazas limitadas! Contáctanos al 987876546.Nuestro paquete incluye transporte ida y vuelta, alojamiento en hoteles de lujo, recorridos guiados por las cataratas, visitas a los puntos de interés más destacados y muchas actividades emocionantes.', image:'assets/img1.jpg' },
    { id: 2, title: 'Viajes a Macchu Picchu - Peru', content: '¡Viaje a Macchu Picchu con un 50% de descuento! No te pierdas esta increíble oferta de viaje a las majestuosas Cataratas del Niágara. Disfruta de la belleza natural de este destino, maravíllate con las imponentes cascadas, vive momentos únicos y reserva ahora para vivir una experiencia inolvidable. ¡Plazas limitadas! Contáctanos al 987876546.Nuestro paquete incluye transporte ida y vuelta, alojamiento en hoteles de lujo, recorridos guiados por las cataratas, visitas a los puntos de interés más destacados y muchas actividades emocionantes.', image:'assets/img2.jpg' },
    { id: 3, title: 'Viajes a Chichen Itza -ultimos!', content: 'Viaje a Chichen Itza con un 50% de descuento! No te pierdas esta increíble oferta de viaje a las majestuosas Cataratas del Niágara. Disfruta de la belleza natural de este destino, maravíllate con las imponentes cascadas, vive momentos únicos y reserva ahora para vivir una experiencia inolvidable. ¡Plazas limitadas! Contáctanos al 987876546.Nuestro paquete incluye transporte ida y vuelta, alojamiento en hoteles de lujo, recorridos guiados por las cataratas, visitas a los puntos de interés más destacados y muchas actividades emocionantes.', image:'assets/img3.jpg'},
 ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
    });
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}
