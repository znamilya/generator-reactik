import constants    from '../constants/<%= constants %>.jsx';

/**
 * Описание
 * 
 * @param  {} state Предыдущее  состояние
 * @param  {Object} action
 * @param  {String} action.type Тип действия
 *
 * @return {}                   Новое состояние
 */
export default function <%= name %>(state = {}, action) {
    switch(action.type) {
<% if (actions.length) { %>
<% actions.forEach(function (action) { -%>
        case constants.<%= action %>:
            return state;

<% }) -%>
<% } -%>
        default:
            return state;
    }
}