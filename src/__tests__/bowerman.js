import Bowerman from '../js/bowerman';

test('проверка создания объекта', () => {
  const result = new Bowerman('Nick', 'Bowman');
  const expected = {
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
