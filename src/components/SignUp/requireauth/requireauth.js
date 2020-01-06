import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

export default function (ComposedComponent) {

  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    constructor(props, context) {
      super(props, context);
   }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/login');
        //return <Redirect to='/login'  />
      }else{
        this.context.router.push('/');
        //return <Redirect to='/'  />
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        //this.context.router.push('/login');
        return <Redirect to='/login'  />
      }
      else{
        //this.context.router.push('/');
        return <Redirect to='/'  />
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
