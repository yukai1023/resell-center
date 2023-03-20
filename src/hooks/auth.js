import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userUpdated, useLazyAuthenticationQuery } from '../store/slices/app';

export const UpdateUser = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(()=> {
    if (user) {
      dispatch(userUpdated(user))
    }
  }, [dispatch, user]);
  return user;
};

export const TokenVerification = () => {
  const [trigger, { isError }] = useLazyAuthenticationQuery();
  const dispatch = useDispatch();
  useEffect(()=> {
    if (!isError) {
      trigger();
    } else {
      localStorage.removeItem('user');
      dispatch(userUpdated(null));
    }
  }, [dispatch, isError, trigger]);
};