const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

const objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused'
}


const expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {

  // if there's not the same number of object keys
  // and expected keys, then we know there are missing or
  // extra keys, so return false
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  // we iterate over each expected key and verify that
  // it's found in `object`.
  for (let i; i<expectedKeys.length; i++) {
    if (!Object.keys(object).find(key => key === expectedKeys[i]
    )) {
      return false;
    }
  }
  // if we get to this point in our code, the keys are valid
  // so we return `true`
  return true;
}

function testIt() {
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  const objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  const expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }

  console.log('SUCCESS: `validateKeys` is working');
}

testIt()
