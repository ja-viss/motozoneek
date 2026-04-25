import { getDriveUrl } from '../utils/driveUtils';

export const BIKES = [
  {
    id: 1,
    name: 'EK Matrix Lite 150',
    category: 'Automática',
    image: getDriveUrl('https://drive.google.com/file/d/1H7nvb2Fx2FdXndpj-9d5phQpXV4HbRTx/view?usp=drive_link'),
    images: [
      getDriveUrl('https://drive.google.com/file/d/1H7nvb2Fx2FdXndpj-9d5phQpXV4HbRTx/view?usp=drive_link'), 
      getDriveUrl('https://drive.google.com/file/d/1y7lnXnF_Asm1rpvXqQ_C1DL2YgGjAqsO/view?usp=drive_link')
    ],
    price: '$1,380',
    hp: '8.71 HP',
    cc: '150 CC',
    desc: 'La scooter automática más compacta y moderna de la marca, ideal para movilidad urbana rápida.',
    specs: {
      motor: '150cc, 1 cilindro, 4 tiempos (Carburado)',
      transmision: 'Totalmente automática',
      potencia: '8.71 HP @ 7500 RPM',
      tanque: '5 Litros (diseño compacto)',
      frenos: 'Disco delantero y tambor trasero',
      destacados: 'Tacómetro digital, iluminación FULL LED y rines de 10 pulgadas'
    }
  },
  {
    id: 2,
    name: 'EK RK 200',
    category: 'Sincrónica',
    image: getDriveUrl('https://drive.google.com/file/d/1ZQWLU8WjO7GbezrgY_RXlMlK9inDusFm/view?usp=drive_link'),
    images: [
      getDriveUrl('https://drive.google.com/file/d/1ZQWLU8WjO7GbezrgY_RXlMlK9inDusFm/view?usp=drive_link'), 
      getDriveUrl('https://drive.google.com/file/d/1B0RJvYAx9EZ6QBzbi7fNfqMkAllTv9Eh/view?usp=drive_link')
    ],
    price: '$1,600',
    hp: '12.87 HP',
    cc: '199.5 CC',
    desc: 'La opción deportiva por excelencia de la gama media. Diseño agresivo y mayor potencia.',
    specs: {
      motor: '199.5cc, 4 tiempos, enfriado por aire',
      transmision: 'Sincrónica de 5 velocidades',
      potencia: '12.87 HP',
      tanque: '14 Litros (Gran autonomía)',
      frenos: 'Disco delantero con cáliper de doble pistón',
      destacados: 'Tablero digital, luces decorativas laterales y rines de 17"'
    }
  },
  {
    id: 3,
    name: 'EK Xpress 150',
    category: 'Sincrónica',
    image: getDriveUrl('https://drive.google.com/file/d/1YBXE9-2HgWsrTRtOD-GWZ45TAFCE_oEa/view?usp=drive_link'),
    images: [
      getDriveUrl('https://drive.google.com/file/d/1YBXE9-2HgWsrTRtOD-GWZ45TAFCE_oEa/view?usp=drive_link'), 
      getDriveUrl('https://drive.google.com/file/d/1e7cCERiNKwItQ9mlJ9FoywvQfzrHXb9q/view?usp=drive_link')
    ],
    price: '$1,200',
    hp: '12.3 HP',
    cc: '149 CC',
    desc: 'El modelo "Cafe Racer" perfecto para trabajo y uso diario con mucho estilo.',
    specs: {
      motor: '149cc, monocilíndrico',
      transmision: 'Sincrónica de 5 velocidades',
      tanque: '10 Litros',
      frenos: 'Disco delantero (según versión)',
      destacados: 'Tacómetro híbrido (Digital-Análogo) e iluminación LED'
    }
  },
  {
    id: 4,
    name: 'EK Owen 150 (GS)',
    category: 'Sincrónica',
    image: getDriveUrl('https://drive.google.com/file/d/1ctwLj1YQmMwBi_q8wq4FEbmS62hBusz6/view?usp=sharing'),
    images: [
      getDriveUrl('https://drive.google.com/file/d/1ctwLj1YQmMwBi_q8wq4FEbmS62hBusz6/view?usp=sharing'), 
      getDriveUrl('https://drive.google.com/file/d/1dg5CbPaJ6jVSdNfYpXWF1ly6cdAUI4Vt/view?usp=drive_link')
    ],
    price: '$1,300',
    hp: '12.3 HP',
    cc: '150 CC',
    desc: 'Un clásico de Venezuela. Conocida por su resistencia, comodidad (asiento bajo) y durabilidad.',
    specs: {
      motor: '142cc - 150cc, 4 tiempos',
      transmision: 'Sincrónica de 5 velocidades',
      tanque: '11 Litros',
      velocidad_maxima: '120 Km/h aprox.',
      frenos: 'Disco delantero y tambor trasero',
      destacados: 'Diseño tipo crucero, cómoda y excelente para carga'
    }
  }
];
