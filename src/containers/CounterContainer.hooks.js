//컨테이너 컴포넌트란? 리덕스에 있는 상태를 조회하거나 액션을 디스패치할 수 있는 컴포넌트를 의미한다.
//리덕스 상태관리
import React from "react";
import Counter from "../components/Counter";
//리액트 컴포넌트에서 리덕스를 연동할 때는 useSelector(상태 조회), useDisaptch(액션 전달) Hook을 사용한다.
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //store.getState했을 때 조회되는 값이 useSelector를 타고 들어 옴
  //그런데 useSelector가 state를 파라미터로 가져와서 비구조화 할당하는 과정에서 매번 새로운 객체를 만들고 있으므로
  //타 컴포넌트가 렌더링될 때 같이 영향을 받아 불필요하게 리렌더링된다
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));
  // 해결방법 #1과 #2의 성능차이는 거의 없다.
  // 해결 #1 useSelector 각각 따로 선언하기
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  // 해결 #2 useSelector을 하나 선언하되 이전 상태와 다음 상태를 비교
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    //객체인 경우 같은지 일일이 비교해야 한다.
    // (left, right) => left.diff === right.diff && left.number === right.number
    // 하지만 모든 값을 다 비교하기엔 어려움이 따른다. 언제 다 비교해?
    //그러므로 react-redux가 제공하는  shallowEqual 함수를 참조하여 넘겨주면 된다.
    shallowEqual
    //★ 단, shallowEqual을 사용한다고 해서 모든 객체를 다 비교하는 것은 아니다.
    //객체 안에 또 객체가 있는 경우 하위 객체의 내용이 서로 다를 경우에는 shallowEqual함수로는 감지할 수 없다.
    //그러나 객체의 불변성을 유지하면서 하위 객체의 내용을 바꾼다면 감지해낼 수 있을 것이다.
  );

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
