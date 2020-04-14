import { hello } from './App';

describe('Testing App.js', () => {
  test('Should exist a function hello()', () => {
    expect(hello()).toBeTruthy;
  })
})