import { add } from '../../../src/shared/utils/add';
import { expect } from 'chai';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);

    expect(result).to.equal(5);
  });

  it('should add 2 and 2 correctly', () => {
    const result = add(2, 2);

    expect(result).to.equal(4);
  });
});
