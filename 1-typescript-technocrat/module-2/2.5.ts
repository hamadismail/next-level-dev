{
  // function with generics
  const createArr = (param: string): string[] => {
    return [param];
  };
  const createArrWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArr('Bangladesh');
  const resGeneric = createArrWithGeneric<string>('Bangladesh');

  type User = { id: number; name: string };
  const resGenericObj = createArrWithGeneric<User>({
    id: 222,
    name: 'Hamad',
  });

  //   tuple
  const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createTupleWithGeneric<string, number>('Bangladesh', 5);
  const resGenericTupleObj = createTupleWithGeneric<string, User>(
    'Bangladesh',
    {
      id: 5,
      name: 'Bangladesh',
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = 'Next Level Dev';

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: 'Mr. X', devType: 'Next Level' });
  const student2 = addCourseToStudent({ name: 'Mr. Y', hasWatch: true });
}
