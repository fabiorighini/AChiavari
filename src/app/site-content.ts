import { Lang } from './i18n.service';

export interface SiteContent {
  nav: {
    home: string;
    apartment: string;
    gallery: string;
    alternative: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  home: {
    introTitle: string;
    introText: string;
    cards: string[];
    highlightsTitle: string;
    highlights: string[];
  };
  apartment: {
    title: string;
    summary: string;
    detailsTitle: string;
    details: string[];
    amenitiesTitle: string;
    amenities: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    bookingNotice: string;
  };
  alternative: {
    title: string;
    subtitle: string;
    hostTitle: string;
    hostText: string;
    servicesTitle: string;
    services: string[];
    ctaWebsite: string;
    ctaContact: string;
  };
  contact: {
    title: string;
    intro: string;
    quickTitle: string;
    quickText: string;
    whatsappLabel: string;
    emailLabel: string;
    mapsLabel: string;
    websiteLabel: string;
    bookingLabel: string;
    addressLabel: string;
    addressText: string;
    locationLabel: string;
    locationText: string;
    transportTitle: string;
    transport: string[];
  };
  footer: {
    text: string;
  };
}

export interface GalleryImage {
  src: string;
  altIt: string;
  altEn: string;
}

const bookingNames = [
  '199868484.jpg',
  '204021243.jpg',
  '204021246.jpg',
  '204021249.jpg',
  '204021250.jpg',
  '204021254.jpg',
  '204021257.jpg',
  '204032524.jpg',
  '204032530.jpg',
  '204032538.jpg',
  '204032548.jpg',
  '204032896.jpg',
  '204032902.jpg',
  '204033683.jpg',
  '204033693.jpg',
  '204033702.jpg',
  '204033711.jpg',
  '204033719.jpg',
  '204033725.jpg',
  '204033733.jpg',
  '204034589.jpg',
  '204034624.jpg',
  '204034627.jpg',
  '204034631.jpg',
  '204034634.jpg',
  '204034636.jpg',
  '204034644.jpg',
  '204034653.jpg',
  '204034660.jpg',
  '204034666.jpg',
  '308870184.jpg',
  '308870342.jpg',
  '308870488.jpg',
  '308870528.jpg',
  '308870591.jpg',
  '308870632.jpg'
];

export const GALLERY_IMAGES: GalleryImage[] = bookingNames.map((name) => ({
  src: `images/booking/${name}`,
  altIt: 'Foto dell\'appartamento a Chiavari',
  altEn: 'Photo of the apartment in Chiavari'
}));

export const SITE_CONTENT: Record<Lang, SiteContent> = {
  it: {
    nav: {
      home: 'Home',
      apartment: 'Appartamento',
      gallery: 'Galleria',
      alternative: 'Alloggio alternativo',
      contact: 'Contatti'
    },
    hero: {
      eyebrow: 'Appartamento A Chiavari',
      title: 'La tua luce ligure tra carruggio e mare',
      subtitle:
        'Nel cuore di Chiavari, a pochi passi dalla spiaggia e dalla stazione. Un soggiorno tra comfort, colori di Riviera e libertà di esplorare il Tigullio.',
      ctaPrimary: 'Scopri l\'appartamento',
      ctaSecondary: 'Guarda la galleria'
    },
    home: {
      introTitle: 'Un soggiorno autentico in centro',
      introText:
        'Appartamento A si trova nel pieno centro di Chiavari, con vista sul carruggio e su Piazza Mazzini. Ristrutturato e arredato per ospitare fino a 4 persone, è il punto di partenza ideale per vivere la Riviera di Levante.',
      cards: [
        'A 300 metri da spiagge, bus e stazione ferroviaria',
        'Due camere matrimoniali, sala con divano letto e cucina attrezzata',
        'Comfort completi: aria condizionata, lavatrice, asciugatrice e lavastoviglie'
      ],
      highlightsTitle: 'Perché scegliere Chiavari',
      highlights: [
        'Partenze comode per Cinque Terre, Portovenere e Portofino',
        'Mercato locale, shopping e vita del centro sotto casa',
        'Atmosfera ligure autentica, elegante e rilassata'
      ]
    },
    apartment: {
      title: 'Dettagli dell\'appartamento',
      summary:
        'L\'appartamento turistico include ingresso-cucina, due stanze matrimoniali, bagno con doccia cromoterapia e soggiorno con divano letto.',
      detailsTitle: 'Panoramica',
      details: [
        'Vista diretta sul carruggio e su Piazza Mazzini',
        'Finestre isolate per quiete e privacy anche in pieno centro',
        'Disponibile per affitti settimanali nella stagione estiva',
        'Capienza ideale: 4 ospiti, con posti aggiuntivi su richiesta'
      ],
      amenitiesTitle: 'Servizi inclusi',
      amenities: [
        'Aria condizionata',
        'Lavatrice e asciugatrice',
        'Lavastoviglie',
        'Cucina completa',
        'Wi-Fi ad alta velocita'
      ]
    },
    gallery: {
      title: 'Galleria fotografica',
      subtitle:
        'Uno sguardo agli interni e all\'atmosfera della tua prossima vacanza a Chiavari.',
      bookingNotice: 'Galleria completa con tutte le foto ufficiali dell\'appartamento.'
    },
    alternative: {
      title: 'Alloggio alternativo: Archi di Borgolungo',
      subtitle:
        'Un bed and breakfast della proprietaria nel cuore di Chiavari, tra piazza, caruggio e mare.',
      hostTitle: 'Sarai ospitato da Paola',
      hostText:
        'Paola ama il mare e la Liguria, accoglie gli ospiti con energia e consigli pratici per vivere Chiavari come un locale.',
      servicesTitle: 'Servizi principali B&B',
      services: [
        'Colazione disponibile ogni mattina in cucina condivisa',
        'Posizione centrale a pochi minuti da stazione e spiaggia',
        'Camere curate in stile ligure e assistenza via WhatsApp'
      ],
      ctaWebsite: 'Visita borgolungo.it',
      ctaContact: 'Contatta il B&B'
    },
    contact: {
      title: 'Contattaci direttamente',
      intro:
        'Tutto quello che serve per organizzare il tuo arrivo a Chiavari, con contatti rapidi e indicazioni pratiche.',
      quickTitle: 'Hai bisogno di una risposta veloce?',
      quickText:
        'Per disponibilita immediate o per coordinare orario di arrivo e check-in, WhatsApp e il canale piu diretto.',
      whatsappLabel: 'Scrivici su WhatsApp',
      emailLabel: 'Email',
      mapsLabel: 'Google Maps',
      websiteLabel: 'Sito ufficiale appartamento',
      bookingLabel: 'Annuncio Booking appartamento',
      addressLabel: 'Indirizzo',
      addressText: 'Centro storico di Chiavari (GE)',
      locationLabel: 'Posizione comoda',
      locationText: 'A pochi minuti a piedi da stazione, centro storico e mare.',
      transportTitle: 'Informazioni utili per l\'arrivo',
      transport: [
        'Rispondiamo in italiano e inglese',
        'La stazione e raggiungibile in pochi minuti a piedi',
        'Ti supportiamo con indicazioni pratiche prima del check-in'
      ]
    },
    footer: {
      text: 'Appartamento A Chiavari - Ospitalita ligure tra sole, mare e carruggio'
    }
  },
  en: {
    nav: {
      home: 'Home',
      apartment: 'Apartment',
      gallery: 'Gallery',
      alternative: 'Alternative stay',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'A Chiavari Apartment',
      title: 'Your Ligurian light between old town and sea',
      subtitle:
        'In the heart of Chiavari, just a short walk from the beach and train station. Enjoy comfort, Riviera colors, and easy access to the whole Gulf of Tigullio.',
      ctaPrimary: 'Discover the apartment',
      ctaSecondary: 'View gallery'
    },
    home: {
      introTitle: 'An authentic stay in central Chiavari',
      introText:
        'Apartment A is right in downtown Chiavari, overlooking the old shopping street and Piazza Mazzini. Renovated and fully equipped for up to 4 guests, it is an ideal base to explore the Eastern Ligurian Riviera.',
      cards: [
        '300 meters from beaches, bus terminal, and railway station',
        'Two double bedrooms, living area with sofa bed, and equipped kitchen',
        'Full comfort: air conditioning, washing machine, dryer, and dishwasher'
      ],
      highlightsTitle: 'Why stay in Chiavari',
      highlights: [
        'Easy day trips to Cinque Terre, Portovenere, and Portofino',
        'Local market, shopping streets, and city life right outside',
        'Elegant and authentic Ligurian atmosphere'
      ]
    },
    apartment: {
      title: 'Apartment details',
      summary:
        'The tourist apartment includes an entrance kitchen, two double bedrooms, a chromotherapy shower bathroom, and a living room with sofa bed.',
      detailsTitle: 'Overview',
      details: [
        'Direct view over the old shopping street and Piazza Mazzini',
        'Well-insulated windows for quiet and privacy in the city center',
        'Available for weekly rentals during summer season',
        'Ideal occupancy: 4 guests, extra beds available on request'
      ],
      amenitiesTitle: 'Included amenities',
      amenities: [
        'Air conditioning',
        'Washing machine and dryer',
        'Dishwasher',
        'Fully equipped kitchen',
        'High-speed Wi-Fi'
      ]
    },
    gallery: {
      title: 'Photo gallery',
      subtitle:
        'A first look at interiors and mood for your next holiday in Chiavari.',
      bookingNotice: 'Complete gallery with all official apartment photos.'
    },
    alternative: {
      title: 'Alternative stay: Archi di Borgolungo',
      subtitle:
        'A bed and breakfast by the same owner in the heart of Chiavari, between piazzas, alleys, and the sea.',
      hostTitle: 'Hosted by Paola',
      hostText:
        'Paola loves the sea and Liguria. She welcomes guests with warmth and practical local tips to experience Chiavari like a resident.',
      servicesTitle: 'Main B&B services',
      services: [
        'Breakfast setup available every morning in the shared kitchen',
        'Central location, minutes from station and beach',
        'Carefully styled rooms and WhatsApp assistance'
      ],
      ctaWebsite: 'Visit borgolungo.it',
      ctaContact: 'Contact the B&B'
    },
    contact: {
      title: 'Contact us directly',
      intro:
        'Everything you need to plan your arrival in Chiavari, with quick contact options and practical guidance.',
      quickTitle: 'Need a quick response?',
      quickText:
        'For immediate availability or to coordinate your arrival and check-in time, WhatsApp is the fastest channel.',
      whatsappLabel: 'Message us on WhatsApp',
      emailLabel: 'Email',
      mapsLabel: 'Google Maps',
      websiteLabel: 'Official apartment website',
      bookingLabel: 'Apartment Booking listing',
      addressLabel: 'Address',
      addressText: 'Historic center of Chiavari (GE)',
      locationLabel: 'Convenient location',
      locationText: 'Only a short walk from the train station, old town, and seafront.',
      transportTitle: 'Useful arrival information',
      transport: [
        'We reply in Italian and English',
        'The train station is reachable within a few minutes on foot',
        'We provide practical guidance before check-in'
      ]
    },
    footer: {
      text: 'A Chiavari Apartment - Ligurian hospitality of sun, sea, and old-town charm'
    }
  }
};
