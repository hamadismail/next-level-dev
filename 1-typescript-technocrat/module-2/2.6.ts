{
  // constraints
  const addCourseToStudent = <T extends { id: number; name: string }>(
    student: T
  ) => {
    const course = 'Next Level Dev';

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 2,
    name: 'Mr. X',
    devType: 'Next Level',
  });
  const student2 = addCourseToStudent({ id: 3, name: 'Mr. Y', hasWatch: true });
  //   const student3 = addCourseToStudent({ name: 'Mr. Y' }); // id and name is constraints
}
