{
  // union type (|)
  type FrontendDeveloper = 'juniorDeveloper' | 'seniorDeveloper'; // string literal type
  type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = 'juniorDeveloper';
  const newDeveloper2: Developer = 'expertDeveloper';

  type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
  };

  const user1: User = {
    name: 'Hamad',
    gender: 'male',
  };

  // intersection type (&)
  type FrontendDeveloper2 = {
    skills: string[];
    designation1: 'Frontend Developer';
  };
  type BackendDeveloper2 = {
    skills: string[];
    designation2: 'Backend Developer';
  };

  type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;
  const fullstackDeveloper2: FullstackDeveloper2 = {
    skills: ['React', 'Tailwind', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
  };
}
