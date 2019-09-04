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
        console.log('Compare props', props);
    }, []);

    return (
        <>
            <h2 className="text-center mt-4 mb-4">Compare</h2>
        </>
    );
}

Compare.defaultProps = {};

Compare.propTypes = {
    /**
     * Props being passed down from parent
     */
    props: PropTypes.node,
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
