{
  // generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface xiaomiWatch {
    brand: string;
    model: string;
    display: string;
  }
  type appleWatch = {
    brand: string;
    model: string;
    heartBitTrack: boolean;
  };
  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const poorDeveloper: Developer<xiaomiWatch> = {
    name: 'Hamad',
    computer: {
      brand: 'Asus',
      model: 'H410',
      releaseYear: 2023,
    },
    smartWatch: {
      brand: 'xiaomi',
      model: 'kw6',
      display: 'OLED',
    },
  };

  const richDeveloper: Developer<appleWatch, YamahaBike> = {
    name: 'Ismail',
    computer: {
      brand: 'HP',
      model: 'H410',
      releaseYear: 2023,
    },
    smartWatch: {
      brand: 'Apple watch',
      model: 'kw6',
      heartBitTrack: true,
    },
    bike: {
      model: 'Yamaha',
      engineCapacity: '100CC',
    },
  };
}
