import React, {useState} from "react";


const Contact = () => {
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e) =>{
        e.preventDefault();
        alert(`my name is ${data.fullname}. My mobile Number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg} `);

    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
             <div className="container container_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label  className="form-label">Full Name</label>
                                <input 
                                type="text"
                                className="form-control" 
                                 id="exampleFormControlInput1" 
                                 placeholder="enter your name" 
                                 name="fullname" 
                                 value={data.fullname} 
                                 onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Phone Number</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="Enter Phone number"
                                name="phone" 
                                value={data.phone} 
                                onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com" 
                                name="email" 
                                value={data.email} 
                                onChange={InputEvent}/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Message</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                name="msg" 
                                value={data.msg} 
                                onChange={InputEvent}
                                >
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;