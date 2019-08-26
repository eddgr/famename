import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Famename extends Component {
    render() {
        const {id, genderSelect, setProps} = this.props;

        const handleGenderButton = gender => {
            setProps({
                genderSelect: gender,
            });
        };

        console.log('Props', this.props);
        return (
            <div id={id}>
                Select a gender: <br />
                <button onClick={() => handleGenderButton('MALE')}>Male</button>
                <button onClick={() => handleGenderButton('FEMALE')}>
                    Female
                </button>
                <button onClick={() => handleGenderButton('BOTH')}>Both</button>
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
