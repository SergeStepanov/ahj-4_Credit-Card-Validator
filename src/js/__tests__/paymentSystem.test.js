import paymentSystem from '../paymentSystem';

test.each([
  ['VISA', '4929028386234026', 'visa'],
  ['MasterCard', '5112647338480660', 'master'],
  ['American Express (AMEX)', '378409340385167', 'amex'],
  ['Discover', '6011637298551964', 'discover'],
  ['JCB', '3533932972953453', 'jcb'],
  ['Diners Club', '36741386974833', 'diners_club'],
  ['Mir', '2201382000000013', 'mir'],
  ['unknown', '8888989898989', 'unknown'],
])('it should be %s', (_, input, expected) => {
  expect(paymentSystem(input)).toEqual(expected);
});
