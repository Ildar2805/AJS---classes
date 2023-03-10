import Swordsman from '../js/swordsman';

test('проверка создания объекта', () => {
  const result = new Swordsman('Nick', 'Swordsman');
  const expected = {
    name: 'Nick',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});
