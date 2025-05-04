{
  // utility types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //   pick
  type NameAge = Pick<Person, 'name' | 'age'>;
  //   omit
  type ContactInfo = Omit<Person, 'name' | 'age'>;
  //   required
  type PersonRequired = Required<Person>;
  //   partial
  type PersonPartial = Partial<Person>;
  //   readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: 'Mr. X',
    age: 200,
    contactNo: '018',
  };
  //   person1.name = 'Mr. Y' // can't reassign value to readonly property

  //   record
  type myObj = Record<string, unknown>; // key->string, value->unknown
  const obj1: myObj = {
    a: 'a',
    b: 'f',
  };

  const emptyObj: Record<string, unknown> = {};
}
