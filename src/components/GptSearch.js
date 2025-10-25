import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setGptSearchToggle } from '../utils/gptSlice';

const GptSearch = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Reset toggle when this component unmounts
    return () => {
      dispatch(setGptSearchToggle(false));
    };
  }, [dispatch]);

  return (
    <div>
      yo sup
    </div>
  )
}

export default GptSearch