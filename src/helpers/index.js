/*
  CONVERT NUMBERS TO A CURRENCY FORMAT.
  INPUT => 12.5
  OUTPUT => $12.50
*/
export const formatPrice = sum => ( // eslint-disable-line
  `$${sum.toFixed(2)}`
);
