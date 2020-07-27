//컨테이너 컴포넌트란? 리덕스에 있는 상태를 조회하거나 액션을 디스패치할 수 있는 컴포넌트를 의미한다.
//리덕스 상태관리
import React from "react";
import Counter from "../components/Counter";
//리액트 컴포넌트에서 리덕스를 연동할 때는 useSelector(상태 조회), useDisaptch(액션 전달) Hook을 사용한다.
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //store.getState했을 때 조회되는 값이 useSelector를 타고 들어 옴
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
