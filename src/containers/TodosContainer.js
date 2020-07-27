import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

//주의사항: 반드시 객체 형태로만 반환해야 한다.
const mapStateToProps = (state) => ({ todos: state.todos });

//bindActionCreators는 객체로만 만들어도 자동으로 액션 함수를 만들어 준다.
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

//사실 mapStateToProps, mapDispatchToProps를 따로 만들지 않고 이 파라미터에 바로 넣어주는 것도 가능하다.
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
