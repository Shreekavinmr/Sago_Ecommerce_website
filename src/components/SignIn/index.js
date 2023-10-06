import React, {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emailSignInStart,googleSignInStart } from "../../redux/user/user.actions";
import './styles.scss';

import AuthWrapper from "../AuthWrapper";
import Forminput from "../forms/Forminput";
import Button from "../forms/Button";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

const SignIn =props=>{
    const {currentUser}=useSelector(mapState);
    const dispatch =useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(() => {
        if (currentUser) {
          resetForm();
          window.location.href = '/login';
        }
    
      }, [currentUser,dispatch]);

    const resetForm =()=>{
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({email,password}));
        // resetForm();
    }


    const handleGoogleSignIn=()=>{
        dispatch(googleSignInStart());
    }

        const configAuthWrapper = {
            headline:'LogIn'
        };
        return (
            <AuthWrapper {...configAuthWrapper}>
    
                    <div className="formWrap">
                        <form onSubmit={handleSubmit}>
                            <Forminput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                handleChange={e=>setEmail(e.target.value)}
                            />
                            <Forminput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="password"
                                handleChange={e=>setPassword(e.target.value)}
                            />

                            <Button type="submit">
                                LogIn
                            </Button>
                            <div className="socialSignin">
                                <div className="row">
                                <Button onClick={handleGoogleSignIn}>
                                {/* </Buttons><Buttons> */}
                                    Sign in with Google
                                </Button>
                                </div>
                            </div>
                            <div className="links">
                                <Link to="/recovery">
                                    Reset Password
                                </Link>
                            </div>
                        </form>
                        
                    </div>
                    
            </AuthWrapper>
        );
    }


export default SignIn;