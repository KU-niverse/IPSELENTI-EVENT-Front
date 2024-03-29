import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import axios from 'axios';
import { useNavigate } from 'react-router';

function AddLineupModal({loggedIn, setLoggedIn}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [singerName, setSingerName] = useState('');
    const [applyReason, setApplyReason] = useState('');

const Navigate = useNavigate();

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
                
            } else{
                setLoggedIn(false);
                Navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }

    }

    const isLoggined = async () => {
        if (loggedIn) {
            console.log('hihi');
            setModalOpen(true)
        }
        else{
            Navigate('/login');
        }
    };

    useEffect (() => {
        checkLoginStatus();
    }, []);


    const addLineupPost = async() => {
        axios.post(process.env.REACT_APP_HOST+'/event/celebrityrequest', {
            celebrity_name: singerName, 
            request_reason: applyReason,
            request_id: '1234567890', 
        }, {withCredentials: true}).then((res)=>{
            setModalOpen(false);
        }).catch( (err) => console.error(err));
    }

    return (
            <div>
                <button className='adding_lineup' onClick={() => {isLoggined()}}>라인업 추가하기 &gt; </button>
                <Modal 
                className='lineupModal'
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}>
                    <GrClose className='modalClose' onClick={() => setModalOpen(false)} />
                    <div className='singerContainer'>
                        <h3>가수 이름</h3>
                        <input 
                        required 
                        className='singerInput' 
                        value={singerName}
                        onChange={e => setSingerName(e.target.value)}
                        />
                        <h3>신청사유(선택)</h3>
                        <textarea
                        required
                        className='reasonInput'
                        value={applyReason}
                        onChange={e => setApplyReason(e.target.value)}
                        />
                        <p className='lineupAlert'>관리자 검토 후 등록됩니다!</p>
                    </div>
                    <button className='addLineupBtn' onClick={addLineupPost}>라인업 추가</button>
                </Modal>
            </div>
    );
};

export default AddLineupModal;