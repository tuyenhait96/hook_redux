import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import HobbyList from "../components/Home/HobbyList/HobbyList";
// import casual from "casual";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
}; // random từ 0 - 9 4 chữ sô, nó se ra lẻ -> math.trunc

function HomePage(props) {
  // strict comparison === (nó lay obj a so sanh obj b)
  // shallow comparion: {a,b} {a,b} : chiu kho từng key (ney giong nhau thì xem nhu giong nhau)

  // thường như vầy
  // cho du 2 cai trigger thay đổi thì van chi có 1c thay doi
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // còn để vầy sẽ làm render lại, không nên
  // const hobbyState = useSelector(
  //   (state) => ({
  //     list: state.hobby.list,
  //     activeId: state.hobby.activeId,
  //   }),
  //   shallowEqual
  // );

  const dispatch = useDispatch();
  console.log("hobbyList", hobbyList);

  const handleAddHobbyClick = () => {
    // random a hobby object: id + title
    const newId = randomNumber();
    const newHobby = {
      // id: casual.uuid,
      // title: casual.title,
      id: newId,
      title: `Hobby ${newId}`,
    };
    console.log(newHobby);

    // dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
    console.log("hobbyList", hobbyList);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="hom-page">
      <h1>REDUX HOOKS - HOMEPAGE</h1>

      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
