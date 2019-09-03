import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * This will be used for searching and comparing names
 */
export default function Compare(props) {
    const {setProps} = props;

    useEffect(() => {
        setProps({
            nameOutput: [],
            currentPage: 'Compare',
        });
    }, []);

    return null;
}

Compare.defaultProps = {};

Compare.propTypes = {
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
