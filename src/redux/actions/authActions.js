export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (credentials) => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// src/redux/actions/authActions.js

// Action Types
export const SUBMIT_APPLICATION = 'SUBMIT_APPLICATION';

// Action Creators
export const submitApplication = (applicationData) => ({
  type: SUBMIT_APPLICATION,
  payload: applicationData,
});
