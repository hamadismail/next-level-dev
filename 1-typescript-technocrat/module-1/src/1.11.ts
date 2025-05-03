{
  //   ternary operator
  const age: number = 15;
  const isAdult = age >= 18 ? 'Adult' : 'Children';
  console.log(isAdult);

  // nullish coalescing operator -> null/undefined
  const isAuthenticated = null;
  const result = isAuthenticated ?? 'Guest';
  console.log({ result });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      premanentAdd?: string; // optional type
      presentAdd: string;
    };
  };
  const user: User = {
    name: 'Hamad',
    address: {
      city: 'Dhaka',
      presentAdd: 'Dhaka',
    },
  };

  const premanentAdd = user?.address?.premanentAdd ?? 'No Permanent Address';
  console.log({ premanentAdd });
}
