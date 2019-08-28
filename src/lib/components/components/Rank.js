import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
/**
 * Displays the most/least popular names
 */
export default function Rank(props) {
    const {setProps} = props;

    const filterGender = gender => {
        setProps({gender});
    };

    const filterEthnicity = ethnicity => {
        setProps({ethnicity});
    };
    useEffect(() => {
        setProps({
            selectedName: [],
            currentPage: 'Rank',
        });
    }, []);
    return (
        <div>
            Filter by Gender
            <br />
            <button onClick={() => filterGender('MALE')}>Male</button>
            <button onClick={() => filterGender('FEMALE')}>Female</button>
            <button onClick={() => filterGender('ALL')}>Show All</button>
            <br />
            Filter by Ethnicity <br />
            <button onClick={() => filterEthnicity('WHITE NON HISPANIC')}>
                White
            </button>
            <button onClick={() => filterEthnicity('BLACK NON HISPANIC')}>
                Black
            </button>
            <button
                onClick={() => filterEthnicity('ASIAN AND PACIFIC ISLANDER')}
            >
                Asian
            </button>
            <button onClick={() => filterEthnicity('HISPANIC')}>
                Hispanic
            </button>
            <button onClick={() => filterEthnicity('ALL')}>Show All</button>
            <p>Hi from Rank</p>
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
