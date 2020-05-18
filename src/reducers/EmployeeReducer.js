import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};



// render() {
//     console.log("here ", this.dataSource);
//     if (this.dataSource) {
//         return (
//             <ListView
//                 enableEmptySections
//                 dataSource={this.dataSource}
//                 renderRow={this.renderRow}
//             />
//         );
//     } else {
//         return (<Text>No Data</Text>)
//     }
// }