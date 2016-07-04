import constants    from '../constants/<%= constants %>';


const defaultState = [];


/**
 * Описание  reducer
 */
export default function <%= name %>(state = defaultState, action) {
    switch (action.type) {
<% if (actions.length) { %>
<% actions.forEach(function (action) { -%>
        case constants.<%= action %>: {
            return state;
        }

<% }) -%>
<% } -%>
        default: {
            return state;
        }
    }
}
