// wrap code with {} to avoid global access problem
{
  // spread operator
  const asianCountries: string[] = ['BD', 'PAK', 'AFG'];
  const europeanCountries: string[] = ['ENG', 'GER', 'NED'];
  asianCountries.push(...europeanCountries);

  const asianCapitals = {
    bd: 'dhaka',
    pak: 'islamabad',
    afg: 'kabul',
  };
  const europeanCapitals = {
    eng: 'london',
    fra: 'peris',
    esp: 'madrid',
  };
  const capitals = {
    ...asianCapitals,
    ...europeanCapitals,
  };

  // rest operator
  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends('Mr. X', 'Mr. Y', 'Mr. Z');
}
