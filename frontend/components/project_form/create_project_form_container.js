import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import ProjectForm from './project_form';
import {createProject} from '../../actions/project_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
    project: {title: '', description: '', photoFile: null},
    steps: [{}]
    // navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
