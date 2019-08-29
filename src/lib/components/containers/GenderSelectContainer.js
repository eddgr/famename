import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Allows users to select a gender to return a list of random names.
 */
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
                <button
                    className="btn"
                    key={index}
                    onClick={() =>
                        setProps({
                            selectedName: [name.toUpperCase()],
                        })
                    }
                >
                    {name}
                </button>
            );
        });
    };

    useEffect(() => {
        setProps({
            currentPage: 'GenderSelectContainer',
            nameOutput: [],
        });
    }, []);

    console.log('GenderSelectContainer props', props);
    return (
        <div>
            <div>
                Select a gender: <br />
                <button
                    className="btn btn-primary"
                    onClick={() => handleGenderButton('MALE')}
                >
                    Male
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => handleGenderButton('FEMALE')}
                >
                    Female
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => handleGenderButton('BOTH')}
                >
                    Both
                </button>
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
};
