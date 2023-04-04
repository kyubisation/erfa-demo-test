import { test } from 'node:test';
import { equal } from 'assert/strict';
import { add } from './add.js';

test('add', () => {
  equal(add(1, 2), 3);
});
