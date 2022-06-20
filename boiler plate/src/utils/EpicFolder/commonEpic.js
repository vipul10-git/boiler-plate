import { ofType, combineEpics } from 'redux-observable';
import {
  mergeMap, map, catchError, takeUntil, switchMap
} from 'rxjs/operators';
import errorWrapper from './errorWrapper';

const epic = (getterFunc, initial, success, cancel, failure, mapFunction, type, failedMsg = 'Failed to fetch data') => action$ => action$.pipe(
    ofType(initial),
    mapFunction(action => getterFunc(type, action.payload)
      .pipe(
        map(response => ({
          type: success,
          payload: response.response,
          meta: action?.payload
        })),
        takeUntil(action$.pipe(ofType(cancel))),
        catchError(error => errorWrapper(error, [{
          type: failure,
          payload: error,
        }, {
          type: actionType.CATELOGUE_FAILURE,
          payload: error,
          msg: error?.response?.message || (typeof error?.response === 'string' && error?.response) || failedMsg,
          meta: action?.payload
        }])
        )
      )
    )
  );

  const sampleEpic = epic(getterFunc, 'initialAction', 'successAction', 'cancelAction', 'failureAction', switchMap, 'GET')

  export default combineEpics(
    sampleEpic,
  );