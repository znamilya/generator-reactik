import constants    from '../constants/<%= constants %>.jsx';

<% if (actions.length) { %>
<% actions.forEach(function (action) { -%>
/
export function <%= action %>() {
    return {
        type: constants.<%= action.toUpperCase() %>,
    };
}

<% }) -%>
<% } -%>