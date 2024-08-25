import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    //directly doing destructring js for define condt
    const { value, name} = event.target;
    //getting hold of new value
    // const newVlaue = event.target.value;
    //getting hold of prvs value
    //with help of name attribute we get to know which field is changing
    // const inputName = event.target.name;
    // console.log(newName);
    // console.log(inputName);
    //now to display changes
    // to remember last inputed value we have hook having variable "fullName" and to remember that
    setFullName(prevValue => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value
        }
      }
    })

  }

//with above code we can see changes but it doesn't store first input value


  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input 
        onChange={handleChange} 
        name="fname" placeholder="First Name" 
        value={fullName.fname}
         /> 
        <input onChange={handleChange} 
        name="lname" placeholder="Last Name" 
        value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
