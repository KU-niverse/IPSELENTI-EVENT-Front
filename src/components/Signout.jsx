import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';

const Signout = () => {
    const Navigate = useNavigate();

    const getLoggedOut = async() => {
        try{
            const response = await axios.get('http://localhost:8080/user/auth/signout', {
                withCredentials: true
            });
            if (response.status === 200) {

                alert(response.data.message);
                Navigate('/');
            }else if (response.status === 401){
                alert(response.data.message);
            }
            //     setLoggedIn(false);
            // }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='logout-box'>
        <button onClick={getLoggedOut} className='logout-btn'>로그아웃</button>
    </div>
    
  )
}

export default Signout