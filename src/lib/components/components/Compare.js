import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
/**
 * This will be used for searching and comparing names
 */
export default function Compare(props) {
    const {setProps} = props;

    useEffect(() => {
        setProps({
            selectedName: [],
            currentPage: 'Compare',
        });
    }, []);

    return <div>Hi from Compare</div>;
}

Compare.defaultProps = {};

Compare.propTypes = {
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
