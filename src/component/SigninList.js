import React from "react";

const SigninList = (props) => {
  console.log(props.users)
  return(
      <div>
          {props.users.users.length} users created!
      </div>
  )
    

}

export default SigninList;