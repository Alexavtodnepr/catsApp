import { IHobby } from 'src/app/models/hobby';

export interface IForm {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  framework: string;
  frameworkVersion: string;
  email: string;
  hobby: IHobby[];
}
