import React, { useState, useEffect } from "react";
import axios from "axios";

const GithubData = () => {

  const [data, setData] = useState(null)


  useEffect(() => {
    axios.get("https://api.github.com/zen")
      .then(response => {
        setData(response.data);
        // console.log(response);
      })
    // axios
    //   .get(
    //     "https://api.github.com/users/kristinamiller?client_id=Iv1.5c478bd20dbba535&client_secret=788eca2a44b6c86e01ea60072e54d5326059b317"
    //   )
    //   .then(response => {
    //     // setData(response.data);
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });;
  })

  return(
    <div>Fetched from Github
      {!data ? null : data}
    </div>
  )

}

export default GithubData;