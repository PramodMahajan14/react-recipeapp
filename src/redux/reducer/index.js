import { combineReducers } from 'redux';
import { dishReducers,selecteddishReducers} from './dishesreducer';

const reducers = combineReducers({
   alldishes :dishReducers,
   dish:selecteddishReducers,
});

export default reducers;