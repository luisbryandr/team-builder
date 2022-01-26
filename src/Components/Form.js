import React from "react";

const Form = (props) => {

    const handleChanges = event => {
        const { name, value } = event.target;
        /**
         * const name = event.target.name;
         * const value = event.target.value;
         */
        props.change(name,value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submit()
    }

    return (
        <form onSubmit={handleSubmit}>  
            <label>Name:
            <input 
                placeholder="Enter your name"
                value= {props.values.name}
                name="name"
                onChange={handleChanges}
                />
            </label>
            <label>Email:
                <input 
                    placeholder="Enter your email here"
                    value={props.values.email}
                    name="email"
                    onChange={handleChanges}
                />
            </label>
            <label>Role:
                <input 
                    placeholder="Enter your Role"
                    value={props.values.role}
                    name="role"
                    onChange={handleChanges}
                />
            </label>
            <input type="submit"  value="Create your Team!" />
        </form>
    )
}

export default Form;