const _data_prime_60 = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
];

export const getMatchPrime = (num) => {
  const get_prime = _data_prime_60.find((e) => e === num);

  return get_prime === undefined ? false : true;
};
