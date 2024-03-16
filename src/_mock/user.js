import { sample } from 'lodash';
import { faker } from '@faker-js/faker';
import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  key:  _mock.id(index),
  cid:  _mock.cid(index),
  name: _mock.fullName(index),
  email:_mock.email(index),
  mobile:_mock.phoneNumber(index),
  subject: _mock.subject(index),
  // problem:_mock.problems(index),
  status:  (index % 2 && 'pending') || (index % 3 && 'reject') || (index % 4 && 'in-process') || 'delivered',
  date: _mock.dates(index),
  
}));
