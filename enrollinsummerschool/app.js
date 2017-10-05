const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: 'In Summer school',
      course: student.course
    }
  });
}

// produces the same result as ^^, but without`.map`
function enrollInSummerSchoolAlt(students) {
  const results = [];
  for (let i=0; i<students.length; i++) {
    results.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course
    });
  }
  return results;
}


/* From here down, you are not expected to understand.... for now :)
  Nothing to see here!

*/

// tests


function testIt() {
  const testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology'
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics'
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science'
    }
  ];

  const results = enrollInSummerSchool(testData);
  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return
  }

  for (let i=0; i<testData.length; i++) {
    const result = results.find(function(_result) {
      return (
        _result.name === testData[i].name &&
        _result.course === testData[i].course &&
        _result.status.toLowerCase() === 'in summer school');
    });
    if (!result) {
      console.error(
        'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school"');
      return
    }
  }
  console.info('SUCCESS: `enrollSummerSchool` is working');
}

testIt();
