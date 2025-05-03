{
  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log('Searching');
    } else {
      console.log('Nothing to search');
    }
  };
  searchName(null);

  // unknown typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
      const convertedSpeed = (value * 1000) / 36000;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === 'string') {
      const [val, unit] = value.split(' ');
      const convertedSpeed = (parseFloat(val) * 1000) / 36000;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log('Wrong input');
    }
  };
  getSpeedInMeterPerSecond('1000 kmh^-1');

  // never type
  const throwErr = (msg: string): never => {
    throw new Error(msg);
  };
  throwErr('Somethings is wrong');
}
