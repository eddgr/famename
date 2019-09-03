import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
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
    return (
        <div className="text-center">
            <div className="mb-2">
                Filter by Gender
                <br />
                <button
                    id="MALE"
                    className={
                        selectGender === 'MALE'
                            ? 'btn btn-primary mr-2'
                            : 'btn btn-outline-primary mr-2'
                    }
                    onClick={() => filterGender('MALE')}
                >
                    Male
                </button>
                <button
                    id="FEMALE"
                    className={
                        selectGender === 'FEMALE'
                            ? 'btn btn-danger mr-2'
                            : 'btn btn-outline-danger mr-2'
                    }
                    onClick={() => filterGender('FEMALE')}
                >
                    Female
                </button>
                <button
                    id="ALL"
                    className={
                        selectGender === 'ALL'
                            ? 'btn btn-warning'
                            : 'btn btn-outline-warning'
                    }
                    onClick={() => filterGender('ALL')}
                >
                    All
                </button>
            </div>
            <div className="mb-2">
                Filter by Ethnicity
                <br />
                <button
                    className={
                        selectEthnicity === 'WHITE NON HISPANIC'
                            ? 'btn-sm btn-info mr-2'
                            : 'btn-sm btn-outline-info mr-2'
                    }
                    onClick={() => filterEthnicity('WHITE NON HISPANIC')}
                >
                    White
                </button>
                <button
                    className={
                        selectEthnicity === 'BLACK NON HISPANIC'
                            ? 'btn-sm btn-info mr-2'
                            : 'btn-sm btn-outline-info mr-2'
                    }
                    onClick={() => filterEthnicity('BLACK NON HISPANIC')}
                >
                    Black
                </button>
                <button
                    className={
                        selectEthnicity === 'ASIAN AND PACIFIC ISLANDER'
                            ? 'btn-sm btn-info mr-2'
                            : 'btn-sm btn-outline-info mr-2'
                    }
                    onClick={() =>
                        filterEthnicity('ASIAN AND PACIFIC ISLANDER')
                    }
                >
                    Asian
                </button>
                <button
                    className={
                        selectEthnicity === 'HISPANIC'
                            ? 'btn-sm btn-info mr-2'
                            : 'btn-sm btn-outline-info mr-2'
                    }
                    onClick={() => filterEthnicity('HISPANIC')}
                >
                    Hispanic
                </button>
            </div>
            <div>
                <button
                    className={
                        selectEthnicity === 'ALL'
                            ? 'btn-sm btn-warning'
                            : 'btn-sm btn-outline-warning'
                    }
                    onClick={() => filterEthnicity('ALL')}
                >
                    All
                </button>
            </div>
        </div>
    );
}

Rank.defaultProps = {};

Rank.propTypes = {
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
