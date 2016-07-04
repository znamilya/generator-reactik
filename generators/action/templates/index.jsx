import constants    from '../constants/<%= constants %>';

<% if (actions.length) { %>
<% actions.forEach(function (action) { -%>
/**
 * Описание action
 */
export function <%= action %>() {
    return {
        type: constants.<%= action.toUpperCase() %>,
    };
}

<% }) -%>
<% } -%>