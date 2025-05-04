{
  // mapped type
  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber['height']; // look up type

  //   type AreaString = {
  //     [key in keyof AreaNumber]: string;
  //   };

  type AreaNumber2 = {
    height: number;
    width: string;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<AreaNumber2> = {
    height: 100,
    width: '50',
  };
}
