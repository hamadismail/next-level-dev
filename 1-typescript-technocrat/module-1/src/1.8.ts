{
  // destructuring -> object
  const user = {
    id: 245,
    name: {
      firstName: 'Hamad',
      lastName: 'Ismail',
    },
    contactNo: '01800000000',
    adress: 'Bangladesh',
  };
  const {
    contactNo: phoneNum, // name alias
    name: { firstName: fName },
  } = user;

  // destructuring -> array
  const contries = ['PAK', 'BD', 'ENG', 'ESP'];
  const [, myCountry, ...europeanCountries] = contries;
}
