import { sample } from 'lodash';
import { faker } from '@faker-js/faker';
import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const tickets = [...Array(24)].map((_, index) => ({
  key:  _mock.id(index),
  tid:  _mock.tid(index),
  cid:  _mock.cid(index),
  email:_mock.email(index),
  problem:_mock.problems(index),
  status:  (index % 2 && 'pending') || (index % 3 && 'reject') || (index % 4 && 'in-process') || 'delivered',
  date: _mock.dates(index),
  
}));
