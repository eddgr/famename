import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Allows users to select a gender to return a list of random names.
 */
export default function GenderSelectContainer(props) {
    const {setProps} = props;
    const [selectGender, setSelectGender] = useState('');

    const handleGenderButton = gender => {
        setSelectGender(gender);
        setProps({
            genderSelect: gender,
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
        <div className="row justify-content-center align-items-center flex-column">
            <div>
                <button
                    className={
                        selectGender === 'MALE'
                            ? 'btn btn-primary mr-2'
                            : 'btn btn-outline-primary mr-2'
                    }
                    onClick={() => handleGenderButton('MALE')}
                >
                    Male
                </button>
                <button
                    className={
                        selectGender === 'FEMALE'
                            ? 'btn btn-danger mr-2'
                            : 'btn btn-outline-danger mr-2'
                    }
                    onClick={() => handleGenderButton('FEMALE')}
                >
                    Female
                </button>
                <button
                    className={
                        selectGender === 'ALL'
                            ? 'btn btn-warning'
                            : 'btn btn-outline-warning'
                    }
                    onClick={() => handleGenderButton('ALL')}
                >
                    All
                </button>
            </div>
            <div className="mt-2">
                <em>Press again for a new name.</em>
            </div>
        </div>
    );
}

GenderSelectContainer.defaultProps = {};

GenderSelectContainer.propTypes = {
    /**
     * Default setProps.
     */
    setProps: PropTypes.func,
};
