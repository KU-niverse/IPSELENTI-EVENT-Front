import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import editCharacter from '../img/haho-head.png';

function SignUpCompleted() {
    const signUpText = "회원가입이 완료되었습니다!\n이제 함께 입실렌티를 즐겨 보아요!"
    return (
        <div className='container'>
            <div className='mobile-view'>
                <div className='editResult'>
                    <img className='editLogo' src={logo} alt='logo' />
                    <img className='editCharacter' src={editCharacter} alt='haho' />
                    <div className='textContainer'>
                        <p style={{fontSize: '14px'}}>{signUpText}</p>
                    </div>
                    <Link to='/login'>
                        <button className="signUpCompleted">로그인 하기</button>
                    </Link>
                    <Link to='/'>
                        <button className="backToHome">홈 화면으로 이동</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpCompleted;