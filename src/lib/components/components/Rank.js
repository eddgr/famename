import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {renderButton} from './style';

/**
 * Displays the most/least popular names
 */
export default function Rank(props) {
    const {setProps} = props;

    const [selectGender, setSelectGender] = useState('ALL');
    const [selectEthnicity, setSelectEthnicity] = useState('ALL');

    const filterGender = gender => {
        setSelectGender(gender);
        setProps({gender});
    };

    const filterEthnicity = ethnicity => {
        setSelectEthnicity(ethnicity);
        setProps({ethnicity});
    };
    useEffect(() => {
        setProps({
            selectedName: [],
            currentPage: 'Rank',
            gender: 'ALL',
            ethnicity: 'ALL',
        });
    }, []);
    console.log('Rank props', props);
    return (
        <div className="text-center">
            <div className="mb-2">
                Filter by Gender
                <br />
                {renderButton(
                    selectGender,
                    filterGender,
                    'MALE',
                    ['btn-primary', 'btn-outline-primary'],
                    false
                )}
                {renderButton(
                    selectGender,
                    filterGender,
                    'FEMALE',
                    ['btn-danger', 'btn-outline-danger'],
                    false
                )}
                {renderButton(
                    selectGender,
                    filterGender,
                    'ALL',
                    ['btn-warning', 'btn-outline-warning'],
                    true
                )}
            </div>
            <div className="mb-2">
                Filter by Ethnicity
                <br />
                {renderButton(
                    selectEthnicity,
                    filterEthnicity,
                    'WHITE NON HISPANIC',
                    ['btn-info', 'btn-outline-info'],
                    false,
                    true
                )}
                {renderButton(
                    selectEthnicity,
                    filterEthnicity,
                    'BLACK NON HISPANIC',
                    ['btn-info', 'btn-outline-info'],
                    false,
                    true
                )}
                {renderButton(
                    selectEthnicity,
                    filterEthnicity,
                    'ASIAN AND PACIFIC ISLANDER',
                    ['btn-info', 'btn-outline-info'],
                    false,
                    true
                )}
                {renderButton(
                    selectEthnicity,
                    filterEthnicity,
                    'HISPANIC',
                    ['btn-info', 'btn-outline-info'],
                    true,
                    true
                )}
            </div>
            <div>
                {renderButton(
                    selectEthnicity,
                    filterEthnicity,
                    'ALL',
                    ['btn-warning', 'btn-outline-warning'],
                    true,
                    true
                )}
            </div>
        </div>
    );
}

Rank.defaultProps = {};

Rank.propTypes = {
    /**
     * Props being passed down from parent
     */
    props: PropTypes.node,
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
