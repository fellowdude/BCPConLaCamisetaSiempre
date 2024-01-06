import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  /*
    assets/images/mibanco_logo_c.png

    assets/images/bcp_logo_c.png

    assets/images/pacifico_logo_c.png
  */
  projectsList: Array<any> = [
    {
      title: 'Ferias de capacitación',
      detail: 'En las ferias “Preparados estamos más seguros”, hemos capacitado a más 5000 personas en ferias de preparación en el norte y centro de nuestro país.',
      image: 'assets/images/projects/1.png',
      logos: ['assets/images/mibanco_logo_c.png','assets/images/bcp_logo_c.png','assets/images/pacifico_logo_c.png'],
      buttonLabel: null,
      buttonLink: null
    },
    {
      title: '"5to Piso" y Fenómeno El Niño',
      detail: 'Desde su serie web “5to Piso” por YouTube, BCP ha concientizado a más de 1.8 millones de peruanos sobre la preparación que se debe tener frente a este Fenómeno El Niño.',
      image: 'assets/images/projects/2.png',
      logos: ['assets/images/bcp_logo_c.png'],
      buttonLabel: 'Míralo aquí',
      buttonLink: 'https://youtu.be/QuF8166im-c?si=HJGgW6IXDW0UZf8Y'
    },
    {
      title: 'Donación de almacenes',
      detail: 'En 5 distritos de Piura y La Libertad hemos donado almacenes con carpas, mochilas de emergencia, botiquines comunitarios, kits de remoción de escombros y otros para que las comunidades afronten el FEN.',
      image: 'assets/images/projects/3.png',
      logos: ['assets/images/pacifico_logo_c.png'],
      buttonLabel: null,
      buttonLink: null
    },
    {
      title: 'Crédito “Refuerza Perú”',
      detail: 'Mi Banco ha lanzado este crédito, con periodo de gracia de hasta 3 meses, para que las familias y negocios puedan reforzar y mejorar sus viviendas y negocios para prepararse ante las lluvias e inundaciones.',
      image: 'assets/images/projects/4.png',
      logos: ['assets/images/mibanco_logo_c.png'],
      buttonLabel: 'Conoce más',
      buttonLink: 'https://www.mibanco.com.pe/noticia/producto-refuerza-peru?utm_source=web&utm_medium=boton&utm_campaign=refuerza-peru&utm_id=PeruPreparado '
    },
    {
      title: 'Charlas y webinars',
      detail: 'Hemos venido organizando una serie de webinars y charlas presenciales dirigidas a pequeños, medianos y grandes empresarios en las zonas más afectadas por fenómenos anteriores.',
      image: 'assets/images/projects/5.png',
      logos: ['assets/images/mibanco_logo_c.png','assets/images/bcp_logo_c.png','assets/images/pacifico_logo_c.png'],
      buttonLabel: null,
      buttonLink: null
    },
    {
      title: '“Municipios Resilientes”',
      detail: 'Más de 40 horas de capacitación a cada uno de los 10 municipios de las zonas que han sido más afectadas sobre planes de respuesta y ejecución de presupuesto frente a desastres.',
      image: 'assets/images/projects/6.png',
      logos: ['assets/images/pacifico_logo_c.png'],
      buttonLabel: null,
      buttonLink: null
    },
    {
      title: 'Capacitaciones por Whatsapp',
      detail: 'Más de 50 mil clientes Mi Banco han sido capacitados por Whatsapp para afrontar este fenómeno para preparar a sus familias y negocios.',
      image: 'assets/images/projects/7.png',
      logos: ['assets/images/mibanco_logo_c.png'],
      buttonLabel: 'Contáctelos',
      buttonLink: 'https://bit.ly/3swmIXt'
    },
    {
      title: '"5to Piso" y Facilidades de pago',
      detail: 'A través de 5to piso hemos brindado asesoramiento sobre cómo funcionan las facilidades de pago a 2.5 millones de personas.',
      image: 'assets/images/projects/8.png',
      logos: ['assets/images/bcp_logo_c.png'],
      buttonLabel: 'Míralo aquí',
      buttonLink: 'https://youtu.be/34KAmxYNCZs?si=SH0fgnLH8l5U2KeD'
    },
    {
      title: 'Seguros especiales',
      detail: 'Mi Banco ha preparado los seguros Hogar Flex y Protección Negocio que protege los bienes de las familias y negocios ante desastres.',
      image: 'assets/images/projects/9.png',
      logos: ['assets/images/mibanco_logo_c.png'],
      buttonLabel: null,
      buttonLink: null
    },
    {
      title: 'Consejos para estar preparados ',
      detail: 'Estamos presentes en las zonas vulnerables ante este fenómeno a través de consejos en prensa, radio y por redes sociales.',
      image: 'assets/images/projects/10.png',
      logos: ['assets/images/bcp_logo_c.png'],
      buttonLabel: null,
      buttonLink: null
    },
    {
      title: 'Salado y Piña vs. El Niño',
      detail: 'A través de nuestro show “Salado y Piña” hemos venido concientizando a la población sobre la importancia de prepararse frente al próximo Fenómeno El Niño.',
      image: 'assets/images/projects/11.png',
      logos: ['assets/images/pacifico_logo_c.png'],
      buttonLabel: 'Míralo aquí',
      buttonLink: 'https://www.youtube.com/watch?v=6cubFSc2lf8&t=2s'
    },
    {
      title: 'Flexibilidad financiera',
      detail: 'BCP ha desarrollado una serie de facilidades de pago para ayudar a sus clientes personas y pymes que se encuentren con dificultades para pagar sus créditos a causa de esta coyuntura.',
      image: 'assets/images/projects/12.png',
      logos: ['assets/images/bcp_logo_c.png'],
      buttonLabel: 'Conócelas aquí',
      buttonLink: 'https://www.viabcp.com/ayuda-pagos'
    }
  ]

  ngOnInit(): void {
    setInterval(()=> {
      this.nextProject();
    }, 5000)
  }

  nextProject(): void {
    let poped = this.projectsList.shift();
    poped && this.projectsList.push(poped);
  }

  prevProject(): void {
    let poped = this.projectsList.pop();
    poped && this.projectsList.unshift(poped);
  }
}
