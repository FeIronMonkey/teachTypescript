import { assert } from 'console';
import { add } from '../../src/utils/add';
import { expect } from 'chai';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);

    assert(result == 5);
    expect(result).to.equal(5);
  });
});
