import { sample } from 'lodash';
import { faker } from '@faker-js/faker';
import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const employees = [...Array(24)].map((_, index) => ({
    key: _mock.id(index),
    emp_id: _mock.emp_id(index),
    emp_name: _mock.emp_name(index),
    emp_email: _mock.emp_email(index),
    emp_password: _mock.emp_password(index),
    emp_mobile: _mock.emp_mobile(index),
    emp_role: _mock.emp_role(index),
    emp_department: _mock.emp_department(index),
    emp_address: _mock.emp_address(index),
    date: _mock.dates(index),

}));
