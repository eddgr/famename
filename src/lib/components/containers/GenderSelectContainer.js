import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {renderButton} from '../components/style';

/**
 * Allows users to select a gender to return a list of random names.
 */
export default function GenderSelectContainer(props) {
    const {setProps} = props;
    const [selectGender, setSelectGender] = useState('');

    const handleButtonClick = gender => {
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
                {renderButton(
                    selectGender,
                    handleButtonClick,
                    'MALE',
                    ['btn-primary', 'btn-outline-primary'],
                    false
                )}
                {renderButton(
                    selectGender,
                    handleButtonClick,
                    'FEMALE',
                    ['btn-danger', 'btn-outline-danger'],
                    false
                )}
                {renderButton(
                    selectGender,
                    handleButtonClick,
                    'ALL',
                    ['btn-warning', 'btn-outline-warning'],
                    true
                )}
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
     * Props being passed down from parent
     */
    props: PropTypes.node,
    /**
     * Default setProps.
     */
    setProps: PropTypes.func,
};
