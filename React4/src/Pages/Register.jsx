import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [register,setRegister] =useState({firstname:"",lastname:"",mobile:"",email:"",password:""})

    const navigation = useNavigate()
    const datachange = (e)=>{
          setRegister({...register,[e.target.name]:e.target.value})
    }
    const datasubmit = (e) => {
    e.preventDefault();

    if(!register.firstname || !register.lastname || !register.mobile || !register.email || !register.password){
             alert("Please Enter the Empty Field")
             return 
    }
    if(register.mobile.length !== 10){
        alert("Please enter 10 digit value")
             return 

    }

    let data = JSON.parse(localStorage.getItem("userdata")) || [];

    data.push(register);

    localStorage.setItem("userdata", JSON.stringify(data));
    alert("Successfully Registered")

    navigation("/login");

    setRegister({ firstname:"", lastname:"", mobile:"", email:"", password:"" });
};

return (
        <>
            <div className="bg-linear-to-br from-rose-200 via-violet-200 to-indigo-200 p-6">

                <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto">
                    <form onSubmit={datasubmit} className="flex flex-col gap-4">

                        <div>
                            <label className="font-semibold">Enter your Firstname:</label>
                            <input
                                type="text"
                                name="firstname"
                                value={register.firstname}
                                onChange={datachange}
                                placeholder="Enter Capital Letter"
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Enter your Lastname:</label>
                            <input
                                type="text"
                                name="lastname"
                                value={register.lastname}
                                onChange={datachange}
                                placeholder="Enter Capital Letter"
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Enter your Mobile No:</label>
                            <input
                                type="number"
                                name="mobile"
                                value={register.mobile}
                                onChange={datachange}
                                placeholder="Enter 10 digit"
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Enter your Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={register.email}
                                onChange={datachange}
                                placeholder="example123@gmail.com"
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="font-semibold">Enter Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={register.password}
                                onChange={datachange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="bg-black text-white w-32 h-10 flex justify-center items-center rounded" >
                                Register
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;