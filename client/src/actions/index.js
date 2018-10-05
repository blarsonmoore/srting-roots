import axios from 'axios';
import { FETCH_USER, FETCH_PROFILE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const SubmitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/userprofile', values);
  history.push('/userprofile');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProfile = () => async dispatch => {
  const res = await axios.get('/api/userprofile');

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const SubmitInstrument = (values, history) => async dispatch => {
  const res = await axios.post('/api/instrumentprofile', values);
  history.push('/userprofile');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchInstruments = () => async dispatch => {
  const res = await axios.get('/api/instrumentprofile');

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};
