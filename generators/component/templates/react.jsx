import React, { PropTypes }     from 'react';
import bemCN                    from 'bem-cn';
import pureRender               from 'pure-render-decorator';
<%if (addStyles) { %>
import './<%= name %>.styl';
<% } %>

/**
 * Описание компонента
 */
@pureRender
class <%= name %> extends React.Component {

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
        const b = bemCN('<%= cssClass %>');

        return (
            <div className={b()}></div>
        );
    }
}


export default <%= name %>;
