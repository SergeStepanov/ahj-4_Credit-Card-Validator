import luhnValidate from '../luhnValidate';

test('Валидация пройдена', () => {
  const input = '4556272064584563';
  expect(luhnValidate(input)).toBeTruthy();
});

test('Валидация не пройдена', () => {
  const input = '65455627206458';
  expect(luhnValidate(input)).toBeFalsy();
});
