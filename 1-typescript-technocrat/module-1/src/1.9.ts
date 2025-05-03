{
  // type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    phoneNum?: string;
  };
  const student1: Student = {
    name: 'Hamad',
    age: 25,
    gender: 'male',
    phoneNum: '01800000000',
  };
  const student2: Student = {
    name: 'Ismail',
    age: 50,
    gender: 'male',
  };

  type UserName = string;
  const userName: UserName = 'Hamad';

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
