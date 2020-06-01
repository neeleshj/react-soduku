import Shuffle from './index';

describe('shuffle', () => {
  it('Returns an array of the same length after the shuffle', () => {
    const array = [1, 2, 3];
    Shuffle(array);
    expect(array).toHaveLength(3);
  });

  it('Returns an array with the same elements after the shuffle', () => {
    const array = [1, 2, 3];
    Shuffle(array);
    console.log('Shuffled Array', array);
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  });
});
