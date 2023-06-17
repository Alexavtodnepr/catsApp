export class AddCats {
  static readonly type = '[Cat] Add Cats';
  constructor(public cats: any[]) {}
}
