{
  // generic constraint with keyof operator
  type Vhicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = 'bike' | 'car' | 'ship';
  type Owner2 = keyof Vhicle; // string literal types with keyof operator

  const person1: Owner = 'bike';
  const person2: Owner2 = 'ship';

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: 'Hamad',
    age: 26,
    address: 'dha',
  };
  const result1 = getPropertyValue(user, 'address');
}
