export default function calculate(button: string, state: State): State {
  if (isNUmberButton(button)) {
    return handleNumberButton(button, state);
  }
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }
  if (isDotButton(button)) {
  }
  if (isDeleteButton(button)) {
  }
  if (isAllClearButton(button)) {
  }
  if (isEqualButton(button)) {
    
  }


  return state;
}

export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

function isNUmberButton(button: string) {
  return !isNaN(+button); 
}

function handleNumberButton(button: string, state: State): State {
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    }
  }
  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false
  }
}

function isOperatorButton(button: string) {
  return button === "+" || button === "-";
}

function handleOperatorButton(button: string, state: State): State {
  if (state.operator === null){
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true
    }
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    opperand: nextValue,
    operator: button,
    isNextClear: true
  }
}
