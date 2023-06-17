import { IBreed } from 'src/app/models/breed';

export interface ICat {
  breeds: IBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
