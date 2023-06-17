import { State, Action, StateContext } from '@ngxs/store';
import { AddCats } from 'src/app/store/catArray.action';
import { ICat } from 'src/app/models/cat';

export class CatStateModel {
  cats!: ICat[];
}

@State<CatStateModel>({
  name: 'cats',
  defaults: {
    cats: [],
  },
})
export class CatState {
  @Action(AddCats)
  addCats(ctx: StateContext<CatStateModel>, action: AddCats) {
    ctx.setState({
      ...ctx.getState(),
      cats: [],
    });

    ctx.patchState({
      cats: [...action.cats],
    });
  }
}
