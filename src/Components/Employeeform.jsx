import "./style.css"
import { useState } from "react";

const EmployeeForm = () =>
{
    const [inp,SetInp] = useState({});

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        SetInp(values => ({...values,[name]:value}))
    }
} 
export default EmployeeForm;