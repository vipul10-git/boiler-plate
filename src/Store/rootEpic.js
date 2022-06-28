import { combineEpics } from 'redux-observable';
import commonEpic from './EpicFolder/commonEpic';

const rootEpic = combineEpics(
    commonEpic,
);

export default rootEpic;