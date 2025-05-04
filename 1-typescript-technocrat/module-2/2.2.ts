{
  // interface //
  // using type alias
  type User1 = {
    name: string;
    age: number;
  };
  // add additional property -> role
  type UserWithRole1 = User1 & { role: string };
  const user1: UserWithRole1 = {
    name: 'Hamad',
    age: 25,
    role: 'admin',
  };

  // using interface
  interface User2 {
    name: string;
    age: number;
  }
  // add additional property -> role
  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user2: UserWithRole2 = {
    name: 'Hamad',
    age: 25,
    role: 'manager',
  };

  // premitive types can't be defined with interface. type alias uses in this scenario
  type rollNumber = number;

  // object, array, function -> object in js
  //   array
  type Roll1 = number[];
  const rollNumber1: Roll1 = [1, 3, 5];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3];

  //   function
  type Add1 = (num1: number, num2: number) => number;
  const add1: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
}
