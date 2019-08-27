import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
/**
 * Displays the most/least popular names
 */
export default function Rank(props) {
    const {setProps} = props;
    useEffect(() => {
        setProps({
            selectedName: '',
        });
    }, []);
    return <div>Hi from Rank</div>;
}

Rank.propTypes = {
    /**
     * Default setProps
     */
    setProps: PropTypes.func,
};
