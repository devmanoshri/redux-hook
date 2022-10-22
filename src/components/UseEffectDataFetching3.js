import React, { useState, useEffect } from "react";
import axios from "axios";
function UseEffectDataFetching3() {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  const handelClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handelClick}>
        Fetch User
      </button>
      <div>{user.name}</div>
    </div>
  );
}

export default UseEffectDataFetching3;
