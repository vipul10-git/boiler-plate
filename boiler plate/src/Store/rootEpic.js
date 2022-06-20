import { combineEpics } from 'redux-observable';
import commonEpic from '../utils/EpicFolder/commonEpic';

const rootEpic = combineEpics(
    commonEpic,
);

export default rootEpic;