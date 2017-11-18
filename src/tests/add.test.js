const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add 2 numbers', () => {
  expect(add(3, 4)).toBe(7);
});

test('should return greeting from name', () => {
  expect(generateGreeting('Edwin')).toBe('Hello Edwin');
});
test('should return greeting for no name', () => {
  expect(generateGreeting()).toBe('Hello Anonymous');
});
