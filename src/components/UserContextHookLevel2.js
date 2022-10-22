import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";
function UserContextHookLevel2() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h3>useContext Hook</h3>
      <div>
        {user}-{channel}
      </div>
    </div>
  );
}

export default UserContextHookLevel2;
