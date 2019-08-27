import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
/**
 * This will be used for searching and comparing names
 */
export default function Compare(props) {
    const {setProps} = props;
    useEffect(() => {
        setProps({
            selectedName: '',
        });
    }, []);
    return <div>Hi from Compare</div>;
}

Compare.propTypes = {
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
