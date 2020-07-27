//컨테이너 컴포넌트란? 리덕스에 있는 상태를 조회하거나 액션을 디스패치할 수 있는 컴포넌트를 의미한다.
//리덕스 상태관리
import React from "react";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
//리액트 컴포넌트에서 리덕스를 연동할 때는 useSelector(상태 조회), useDisaptch(액션 전달) Hook을 사용한다.
import { connect } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
      //bindActionCreator를 사용하지 않는 경우
      // onIncrease={onIncrease}
      // onDecrease={onDecrease}
      // onSetDiff={onSetDiff}
    />
  );
}
//2가지 함수 선언
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

//#1 bindActionCreators는 객체로만 선언하면 자동으로 이루어지기도 한다.
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

//bindActionCreators를 사용하는 방법 #1
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff, <== 유심히 보기.. 파라미터를 넣어야 하지만 bindActionCreators에서는 넣지 않았음.
//     },
//     dispatch
//   );

/*const mapDispatchToProps = (dispatch) =>  ({
  이는 dispatch를 하는 방식이 완전히 똑같다.
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
});*/

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer); //connect를 호출하면 하나의 함수가 만들어진다. 그리고 그 만들어진 함수에 새로운 파라미터를 넘기는 것.
//=> 나열형...
// const enhance = connect(mapStateToProps, mapDispatchToProps);
// export default enhance(CounterContainer);
