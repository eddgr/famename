import React from 'react';
import PropTypes from 'prop-types';

/**
 * Allows users to select a gender to return a list of random names.
 */
export default function GenderSelectContainer(props) {
    const {setProps, nameOutput, selectedName} = props;
    const handleGenderButton = gender => {
        setProps({
            genderSelect: gender,
        });
    };

    const renderNames = () => {
        return nameOutput.map((name, index) => {
            return (
                <li
                    key={index}
                    onClick={() =>
                        setProps({
                            selectedName: [name.toUpperCase()],
                        })
                    }
                >
                    {name}
                </li>
            );
        });
    };

    console.log('GenderSelectContainer props', props);
    return (
        <div>
            <div>
                Select a gender: <br />
                <button onClick={() => handleGenderButton('MALE')}>Male</button>
                <button onClick={() => handleGenderButton('FEMALE')}>
                    Female
                </button>
                <button onClick={() => handleGenderButton('BOTH')}>Both</button>
            </div>
            <div>{renderNames()}</div>
        </div>
    );
}

GenderSelectContainer.defaultProps = {};

GenderSelectContainer.propTypes = {
    /**
     * Default setProps.
     */
    setProps: PropTypes.func,

    /**
     * List of names that are passed down as props.
     */
    nameOutput: PropTypes.array,

    /**
     * List of names have been selected.
     */
    selectedName: PropTypes.array,
};
