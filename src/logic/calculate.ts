export default function calculate(button: string, state: State): State {
  if (isNUmberButton(button)) {
    return handleNumberButton(button, state);
  }
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }
  if (isDotButton(button)) {
    return handleDotButton(state);
  }
  if (isDeleteButton(button)) {
    return handleDeleteButton(state);
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
function isDotButton(button: string) {
  return button === ".";
}

function handleDotButton(state: State): State {
  if (state.current.indexOf('.') !== -1) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isNextClear: false
  }
}

function isDeleteButton(button: string) {
  return button === "D";
}

function handleDeleteButton(state: State): State {
  if (state.current.length === 1) {
    return {
      current: "0",
      operand: state.operand,
      operator: state.operator,
      isNextClear: false
    }
  }
  return {
    current: state.current.substring(0, state.current.length - 1),
    operand: state.operand,
    operator: state.operator,
    isNextClear: false
  }
}