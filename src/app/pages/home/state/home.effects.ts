import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as fromHomeActions from './home.actions';

@Injectable()
export class HomeEffects {
  test$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromHomeActions.changeText),
      map(({ text }) => console.log(text))
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
