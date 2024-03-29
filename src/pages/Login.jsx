import { Link } from "react-router-dom/dist";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import { useState, useEffect } from "react";
// import logo from '../img/logo.png';

//import {Useform, useForm} from 'react-hook-form';


function Login() {

    // const {register} = useForm();
    // const { watch } = useForm();
    // const {handleSubmit} = useForm();
    // const onValid = (data) => {
    //     console.log(data);
    // }

    const checkLoginStatus = async () => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_HOST+"/user/auth/issignedin",
                {
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                setLoggedIn(true);
                Navigate('/');
            } else{
                setLoggedIn(false);
            }
        } catch (error) {
            console.error(error);
        }

    }


    useEffect (() => {
        checkLoginStatus();
    }, []);


    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const Navigate = useNavigate();

    const pointRequest = async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_HOST+'/user/point/attend',{
                withCredentials: true
            });
            
        }catch(err){
            console.error(err)
        }
    }   


    const userLogin = async () => {
        try{
            const response = await axios.post(process.env.REACT_APP_HOST+'/user/auth/signin', {
                user_id: userId,
                password: userPw,
            }, {
                withCredentials: true
            });
            if (response.data.success) {
                setLoggedIn(true);
                pointRequest();
                Navigate('/');
            } else {
                setLoggedIn(false);
                return alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            }
        } catch (error) {
            console.error(error);
            return alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
    }

    const handleOnClick = () => {
        userLogin();
    }
    
    
    

    return (

        <div class="container">
            <div class="mobile-view">
                <div className='auth'>
                    
                    <div className="logoCharacter">
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="editLogo" alt="logo"/>
                        </Link>
                        <img src={process.env.PUBLIC_URL + '/images/haho-head.png'} className="editCharacter" alt="haho" />
                    </div>
                    
                    
                    {/* <img class="login-img"src={temporaryLogo} alt=""/> */}
                    <div>
                        <form class="login-form">
                            <input 
                            type='text'
                            placeholder='학번을 입력하세요.' 
                            value={userId} 
                            onChange={e => setUserId(e.target.value)}
                            />
                            <input 
                            type='password'  
                            placeholder='비밀번호를 입력하세요.'
                            value={userPw} 
                            onChange={e => setUserPw(e.target.value)}
                            />
                            <button type="button" id='btn' onClick={handleOnClick}>Login</button>
                            <span>가입하면 30000P 바로 지급 <Link to="/signup">회원가입</Link>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;