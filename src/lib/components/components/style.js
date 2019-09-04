import PropTypes from 'prop-types';

export const renderButton = (
    selectState,
    handleButtonClick,
    genderEthnicity,
    cssArray,
    last,
    ethnicity = false
) => {
    const capitalizeGender = ethnicity
        ? genderEthnicity.split(' ')[0][0] +
          genderEthnicity
              .split(' ')[0]
              .slice(1)
              .toLowerCase()
        : genderEthnicity[0] + genderEthnicity.slice(1).toLowerCase();

    return (
        <button
            className={
                selectState === genderEthnicity
                    ? `${ethnicity ? 'btn-sm' : 'btn'} ${cssArray[0]} ${!last &&
                          'mr-2'}`
                    : `${ethnicity ? 'btn-sm' : 'btn'} ${cssArray[1]} ${!last &&
                          'mr-2'}`
            }
            onClick={() => handleButtonClick(genderEthnicity)}
        >
            {capitalizeGender}
        </button>
    );
};

renderButton.propTypes = {
    selectState: PropTypes.string,
    handleButtonClick: PropTypes.func,
    genderEthnicity: PropTypes.string,
    cssArray: PropTypes.array,
    last: PropTypes.bool,
    ethnicity: PropTypes.bool,
};
