import { createAction, props } from "@ngrx/store";

export const changeText = createAction(
  '[Home] Change Text',
  props<{ text: string }>()
)
