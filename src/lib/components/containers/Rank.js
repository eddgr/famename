import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {renderButton} from '../components/style';

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
                {renderButton({
                    selectState: selectGender,
                    handleButtonClick: filterGender,
                    genderEthnicity: 'MALE',
                    cssArray: ['btn-primary', 'btn-outline-primary'],
                    last: false,
                })}
                {renderButton({
                    selectState: selectGender,
                    handleButtonClick: filterGender,
                    genderEthnicity: 'FEMALE',
                    cssArray: ['btn-danger', 'btn-outline-danger'],
                    last: false,
                })}
                {renderButton({
                    selectState: selectGender,
                    handleButtonClick: filterGender,
                    genderEthnicity: 'ALL',
                    cssArray: ['btn-warning', 'btn-outline-warning'],
                    last: true,
                })}
            </div>
            <div className="mb-2">
                Filter by Ethnicity
                <br />
                {renderButton({
                    selectState: selectEthnicity,
                    handleButtonClick: filterEthnicity,
                    genderEthnicity: 'WHITE NON HISPANIC',
                    cssArray: ['btn-info', 'btn-outline-info'],
                    last: false,
                    ethnicity: true,
                })}
                {renderButton({
                    selectState: selectEthnicity,
                    handleButtonClick: filterEthnicity,
                    genderEthnicity: 'BLACK NON HISPANIC',
                    cssArray: ['btn-info', 'btn-outline-info'],
                    last: false,
                    ethnicity: true,
                })}
                {renderButton({
                    selectState: selectEthnicity,
                    handleButtonClick: filterEthnicity,
                    genderEthnicity: 'ASIAN AND PACIFIC ISLANDER',
                    cssArray: ['btn-info', 'btn-outline-info'],
                    last: false,
                    ethnicity: true,
                })}
                {renderButton({
                    selectState: selectEthnicity,
                    handleButtonClick: filterEthnicity,
                    genderEthnicity: 'HISPANIC',
                    cssArray: ['btn-info', 'btn-outline-info'],
                    last: true,
                    ethnicity: true,
                })}
            </div>
            <div>
                {renderButton({
                    selectState: selectEthnicity,
                    handleButtonClick: filterEthnicity,
                    genderEthnicity: 'ALL',
                    cssArray: ['btn-warning', 'btn-outline-warning'],
                    last: true,
                    ethnicity: true,
                })}
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
