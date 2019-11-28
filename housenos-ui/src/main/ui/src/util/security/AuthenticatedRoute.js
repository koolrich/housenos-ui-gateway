import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.login.isAuthenticated
    };
}

const AuthenticatedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect
                        to={{
                            pathname: "/login", state: {
                                from: props.location
                            }
                        }}
                    />
                }
            }
            }
        />
    );
};

export default connect(mapStateToProps, null)(AuthenticatedRoute);