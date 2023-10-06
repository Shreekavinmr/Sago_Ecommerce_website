import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { resetPasswordStart,resetUserState } from "../../redux/user/user.actions";

import './styles.scss';
import AuthWrapper from "../AuthWrapper";
import Forminput from "../forms/Forminput";
import Button from "../forms/Button";

const mapState=({user})=>({
    resetPasswordSucces: user.resetPasswordSucces,
    userErr: user.userErr
});


const EmailPassword = props=>{
    const {resetPasswordSucces,userErr} =useSelector(mapState);
    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const[errors,setErrors]=useState('');

    useEffect(()=>{
        if(resetPasswordSucces){
            dispatch(resetUserState());
            window.location.href = '/login';
        }
    },[resetPasswordSucces,dispatch]);

    useEffect(()=>{
        if(Array.isArray(userErr) && userErr.length>0){
            setErrors(userErr);
        }

    },[userErr]);

    const handleSubmit =  e =>{
       e.preventDefault(); 
       dispatch(resetPasswordStart({email}));

    
    }
        
        const configAuthWrapper={
            headline: 'Email Password'
        };

        return(
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        )}
                    <form onSubmit={handleSubmit}>
                        <Forminput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e=>setEmail(e.target.value)}
                        />
                    </form>

                    <Button type="submit">
                        Email Password
                    </Button>
                </div>

            </AuthWrapper>
        );
    }

export default EmailPassword;