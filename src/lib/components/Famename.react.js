import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import GenderSelectContainer from './containers/GenderSelectContainer';
import NavBar from './components/NavBar';
import Compare from './components/Compare';
import Rank from './components/Rank';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Famename extends Component {
    render() {
        const {id, setProps, nameOutput} = this.props;

        console.log('Main Props', this.props);
        return (
            <BrowserRouter>
                <div id={id}>
                    <NavBar />
                    <Switch>
                        <Route
                            path="/"
                            render={() => (
                                <GenderSelectContainer
                                    setProps={setProps}
                                    nameOutput={nameOutput}
                                />
                            )}
                            exact
                        />
                        <Route path="/compare" component={Compare} />
                        <Route path="/rank" component={Rank} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

Famename.defaultProps = {};

Famename.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Default setProps.
     */
    setProps: PropTypes.func,

    /**
     * Selects gender based on user's selection.
     */
    genderSelect: PropTypes.string,

    /**
     * Name selected by user to display trend graph.
     */
    selectedName: PropTypes.string,

    /**
     * List of names based on gender selected by user.
     */
    nameOutput: PropTypes.array,
};
