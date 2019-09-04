import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {RenderButton} from '../components/style';

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
                <RenderButton
                    selectState={selectGender}
                    handleButtonClick={handleButtonClick}
                    genderEthnicity={'MALE'}
                    cssArray={['btn-primary', 'btn-outline-primary']}
                    last={false}
                />
                <RenderButton
                    selectState={selectGender}
                    handleButtonClick={handleButtonClick}
                    genderEthnicity={'FEMALE'}
                    cssArray={['btn-danger', 'btn-outline-danger']}
                    last={false}
                />
                <RenderButton
                    selectState={selectGender}
                    handleButtonClick={handleButtonClick}
                    genderEthnicity={'ALL'}
                    cssArray={['btn-warning', 'btn-outline-warning']}
                    last={true}
                />
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
