//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const gigaMs = (10**9) * 1000

export function gigasecond(date) {
  return new Date (date.getTime() + gigaMs )
  ;
};
