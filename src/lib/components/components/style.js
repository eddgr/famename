import PropTypes from 'prop-types';

export const RenderButton = props => {
    const capitalizeGender = props.ethnicity
        ? props.genderEthnicity.split(' ')[0][0] +
          props.genderEthnicity
              .split(' ')[0]
              .slice(1)
              .toLowerCase()
        : props.genderEthnicity[0] +
          props.genderEthnicity.slice(1).toLowerCase();
    return (
        <button
            className={
                props.selectState === props.genderEthnicity
                    ? `${props.ethnicity ? 'btn-sm' : 'btn'} ${
                          props.cssArray[0]
                      } ${!props.last && 'mr-2'}`
                    : `${props.ethnicity ? 'btn-sm' : 'btn'} ${
                          props.cssArray[1]
                      } ${!props.last && 'mr-2'}`
            }
            onClick={() => props.handleButtonClick(props.genderEthnicity)}
        >
            {capitalizeGender}
        </button>
    );
};

RenderButton.propTypes = {
    selectState: PropTypes.string,
    handleButtonClick: PropTypes.func,
    genderEthnicity: PropTypes.string,
    cssArray: PropTypes.array,
    last: PropTypes.bool,
    ethnicity: PropTypes.bool,
};
