import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GenderSelectContainer from './containers/GenderSelectContainer';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Famename extends Component {
    render() {
        const {id, genderSelect, setProps, nameOutput} = this.props;

        console.log('Main Props', this.props);
        return (
            <div id={id}>
                <GenderSelectContainer
                    setProps={setProps}
                    nameOutput={nameOutput}
                />
            </div>
        );
    }
}

Famename.defaultProps = {};

Famename.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    genderSelect: PropTypes.string,
    nameOutput: PropTypes.array,
};
