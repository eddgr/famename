import React from 'react';
import PropTypes from 'prop-types';

export default function GenderSelectContainer(props) {
    const {setProps, nameOutput} = props;
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
                            selectedName: name.toUpperCase(),
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
    setProps: PropTypes.func,
    nameOutput: PropTypes.array,
    selectedName: PropTypes.string,
};
