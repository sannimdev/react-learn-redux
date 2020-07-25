import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

//액션 리스트
const INCREASE = "INCREASE"; //키운터에 숫자 올리기
const DECREASE = "DECREASE"; //카운터에 숫자 내리기
const CHANGE_TEXT = "CHANGE_TEXT"; //text값 변경
const ADD_TO_LIST = "ADD_TO_LIST"; //리스트에 특정 항목 추가하기

//액션 생성 함수 (대부분의 경우 화살표 함수로 작성한다.)
//액션함수는 소문자로 작성하고, 액션명은 대문자로 작성한다.
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

//단어가 2개 이상의 경우 camelCase
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//리듀서 작성
//리덕스에서는 초기 상태를 만들 때는 리듀서를 한 번 호출된다.
//그런데 여기서 state가 undefined라면 default case로 흐르게 된다.
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item), //불변성 유지해야 함에 유의!!!!
      };
    default:
      //처리하지 못한 액션의 경우
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

//구독을 위한 리스너 함수 작성
const listener = () => {
  const state = store.getState(); //리덕스 미들웨어를 사용하는 게 아니라면 직접적으로 사용할 일은 없음
  console.log("구독 구독 구독", state);
};

// 구독을 해제하고 싶을 떄 호출
const unsubscribe = store.subscribe(listener); //리덕스에서 직접적으로 사용할 일은 없음
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "WOW!!!" }));

window.store = store; //크롬 콘솔 개발자도구에서 바로 사용 가능
window.unsubscribe = unsubscribe;

/*
헬퍼, 훅스를 이용하여 리덕스와 연결하게 됨
*/
