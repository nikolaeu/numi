function fact(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;

  return num * fact(num - 1);
}

function permute(values) {
  const [n, r] = values;

  return {double: fact(n.double) / fact(n.double - r.double)};
}

function choose(values) {
  const [, r] = values;

  return {double: permute(values).double / fact(r.double)};
}

numi.addFunction({id: 'choose', phrases: 'choose'}, choose);

numi.addFunction({id: 'permute', phrases: 'permute'}, permute);
