import <%= constants %>    from '../constants/<%= constants %>.js';


export default function <%= name %>(state = {}, action) {
    switch(action.type) {
        case <%= constants %>.ACTION:
            return action.data;

        default:
            return state;
    }
}