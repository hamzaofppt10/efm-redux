import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer/Reducer'; // Adjust the import path as necessary

const BMI = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleWeightChange = (e) => {
    dispatch({ type: 'SET_WEIGHT', payload: e.target.value });
  };

  const handleHeightChange = (e) => {
    dispatch({ type: 'SET_HEIGHT', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CALCULATE_BMI' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Weight (kg): </label>
            <input
              type="number"
              value={state.weight}
              onChange={handleWeightChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Height (cm): </label>
            <input
              type="number"
              value={state.height}
              onChange={handleHeightChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Calculate BMI
          </button>
        </form>
        {state.bmi && (
          <div className="mt-6 text-center">
            <h2 className={`text-xl font-semibold`}>Your BMI is: {state.bmi}</h2>
            <h3 className={`text ${state.bmiColor}`}>{state.bmiCategory}</h3>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;