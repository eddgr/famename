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
    constructor() {
        super();
        this.state = {
            rank: {},
        };
    }

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
                        <Route
                            path="/compare"
                            render={() => <Compare setProps={setProps} />}
                        />
                        <Route
                            path="/rank"
                            render={() => <Rank setProps={setProps} />}
                        />
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
    selectedName: PropTypes.array,

    /**
     * List of names based on gender selected by user.
     */
    nameOutput: PropTypes.array,

    /**
     * Shows current user page.
     */
    currentPage: PropTypes.string,

    // rank5_names: PropTypes.array,
    // rank5_count: PropTypes.array,
};
