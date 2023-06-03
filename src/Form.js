import React from "react";

function Form(){
   const[formData, setFormData]=React.useState({
     firstName: "", 
     secondName: "",
     email: "",
     comments:"",
     isfriendly: true,
     employement: "",
     favcolor: ""
})
  console.log(formData.favcolor)
  
   
   
   function handleChange(event){
    const{name, value, type, checked} = event.target
    setFormData=(prevstate=>{
        return{ 
        ...prevstate,
            [name]:type==="checkbox"? checked : value
        }
    })
    
    }
    function handlesubmit(event){
        event.preventDefault()
        console.log(formData)   
    }
    
   
    return(
        <form onSubmit={handlesubmit}>
<inpute
type="text"
placeholder= "firstName"
onChange={handleChange}
name="firstName"
value={formData.firstName}
/>

<inpute
type="text"
placeholder= "secondName"
onChange={handleChange}
name="secondName"
value={formData.secondName}
/>

<inpute
type="text"
placeholder= "email"
onChange={handleChange}
name="email"
value={formData.email}
/>

<textarea
   value={formData.comments}
   placeholder="comments"
   onChange={handleChange}
    name="comments"
    />

    <inpute
   type="checkbox"
    id="isfriendly"
    checkbox={formData.isfriendly}
    onChange={handleChange}
    name="isfriendly"
    />
    <br/>
    <label htmlFor="isfriendly"> are you friendly?</label>
<br/>
<br/>

<fieldset>
<legend>currently unemployed status</legend>

<inpute
type="radio"
id="unemployed"
 name="employement"
 checked={formData.employement==="unemployed"}
 value="unemployed"
 onChange={handleChange}
 />
 <label>unemployed</label>
<br/>

 <inpute
type="radio"
 id="part-time"
 name="employement"
 checked={formData.employement==="part-time"}
 value="part-time"
 onChange={handleChange}
 />
 <label>part-time</label>
<br/>

 <inpute
type="radio"
 id="full-time"
 name="employement"
 value="full-time"
 checked={formData.employement==="full-time"}
 onChange={handleChange}
 />
 <label>full-time</label>
</fieldset>
<br/>
<label htmlFor="favcolor"> what is your favourite color?</label>
<br/>
<select
id="favcolor"
value={formData.favcolor}
onChange={handleChange}
name="favcolor"
>
<option value="choose"> choose</option>
<option value="red"> Red</option>
<option value="green"> Green</option>
<option value="purple"> purple</option>
<option value="blue"> Blue</option>
<option value="yellow"> yellow</option>
</select>
<br/>
<button>type="submit"</button>
</form>
    )
}
export default Form;