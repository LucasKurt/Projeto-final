import {createStore} from 'redux';

<<<<<<< HEAD
import reducers from '../Reducers';
=======
import reducers from '../reducers';
>>>>>>> 486e844f03ac345d9255093435b9c879b5d5d3db

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;