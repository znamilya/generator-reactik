import React, { PropTypes }     from 'react';
import bemCl                    from 'bem-cl';
<%if (addStyles) { %>
import './<%= name %>.styl';
<% } %>

const b = bemCl('<%= cssClass %>');

class <%= name %> extends React.PureComponent {

    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------------------ */
    /* METHODS                                                                                    */
    /* ------------------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------------------ */
    /* HANDLERS                                                                                   */
    /* ------------------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className={b()}><%= name></div>
        );
    }
}


export default <%= name %>;
