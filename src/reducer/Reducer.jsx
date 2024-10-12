export const initialState = {
  weight: '',
  height: '',
  bmi: null,
  bmiCategory: '',
  bmiColor: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEIGHT':
      return { ...state, weight: action.payload };
    case 'SET_HEIGHT':
      return { ...state, height: action.payload };
    case 'CALCULATE_BMI': {
      const heightInMeters = state.height / 100;
      const bmiValue = (state.weight / (heightInMeters * heightInMeters)).toFixed(2);
      let category = '';
      let color = '';
      if (bmiValue < 18.5) {
        category = 'Underweight';
        color = 'text-blue-500';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = 'Normal weight';
        color = 'text-green-500';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        category = 'Overweight';
        color = 'text-orange-500';
      } else {
        category = 'Obesity';
        color = 'text-red-500';
      }
      return { ...state, bmi: bmiValue, bmiCategory: category, bmiColor: color };
    }
    default:
      return state;
  }
};

export default reducer;