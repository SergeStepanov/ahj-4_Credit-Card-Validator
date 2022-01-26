/* eslint-disable no-param-reassign */
/* eslint-disable prefer-regex-literals */
/* eslint-disable consistent-return */
export default function paymentSystem(value) {
  // JCB
  const jcbRegex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); // 2131, 1800, 35 (3528-3589)
  // American Express
  const amexRegex = new RegExp('^3[47][0-9]{0,}$'); // 34, 37
  // Diners Club
  const dinersRegex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); // 300-305, 309, 36, 38-39
  // Visa
  const visaRegex = new RegExp('^4[0-9]{0,}$'); // 4
  // MasterCard
  const mastercardRegex = new RegExp(
    '^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$',
  ); // 2221-2720, 51-55
  // Discover
  const discoverRegex = new RegExp(
    '^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$',
  );
  /// /6011, 622126-622925, 644-649, 65
  // Mir
  const mirRegex = new RegExp('^2[0-9]{0,}$'); // 2

  value = value.replace(/\D/g, '');

  let brand = 'unknown';
  if (value.match(jcbRegex)) {
    brand = 'jcb';
  } else if (value.match(amexRegex)) {
    brand = 'amex';
  } else if (value.match(dinersRegex)) {
    brand = 'diners_club';
  } else if (value.match(visaRegex)) {
    brand = 'visa';
  } else if (value.match(mastercardRegex)) {
    brand = 'master';
  } else if (value.match(discoverRegex)) {
    brand = 'discover';
  } else if (value.match(mirRegex)) {
    brand = 'mir';
  }

  return brand;
}
