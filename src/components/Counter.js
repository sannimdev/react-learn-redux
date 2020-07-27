//프레젠테이셔널 컴포넌트란? (Presentational Component)
//리덕스 스토어에 직접 접근하지 않고 필요한 값이나 함수를 props로만 받아와서 사용하는 컴포넌트
//오로지 View만을 담당하는 컴포넌트.
import React from "react";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
