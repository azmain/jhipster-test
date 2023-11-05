import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 56543,
  lastName: 'Kutch',
  email: 'Harrison14@hotmail.com',
  hireDate: dayjs('2023-11-04T19:29'),
  commissionPct: 99523,
  slipNo: 40560,
  payOrderNumber: 28480,
};

export const sampleWithFullData: IEmployee = {
  id: 86212,
  firstName: 'Henriette',
  lastName: 'Greenholt',
  email: 'Ervin.Lehner@hotmail.com',
  phoneNumber: 'grey SSL sensor',
  hireDate: dayjs('2023-11-04T09:09'),
  salary: 89015,
  commissionPct: 35265,
  slipNo: 64922,
  payOrderNumber: 99788,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
