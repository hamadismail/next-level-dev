// Reference Type --> Object
const user: {
  company: 'Programming Hero'; // literal type(behave like value) -> fixed value
  readonly firstName: string;
  lastName: string;
  address?: string; // optional type
} = {
  company: 'Programming Hero',
  firstName: 'Hamad',
  lastName: 'Ismail',
};

// user.firstName = 'Mr. X'; // read-only property can't be re-assigned
