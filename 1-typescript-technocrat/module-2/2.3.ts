{
  // generic type //

  type GenericArray<T> = Array<T>;

  //   const rollNum: number[] = [2, 3, 5];
  //   const rollNum: Array<number> = [2, 3, 5];
  const rollNum: GenericArray<number> = [2, 3, 5];

  //   const mentors: string[] = ['Mr. X', 'Mr. Y'];
  //   const mentors: Array<string> = ['Mr. X', 'Mr. Y'];
  const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y'];

  //   const boolArray: boolean[] = [true, false];
  //   const boolArray: Array<boolean> = [true, false];
  const boolArray: GenericArray<boolean> = [true, false];

  //   generic array of object
  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: 'Hamad',
      age: 35,
    },
    {
      name: 'Ismail',
      age: 25,
    },
  ];

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const human: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: 'Hamad', email: 'me@gmail.com' },
  ];
}
