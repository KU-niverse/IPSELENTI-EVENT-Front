import Modal from 'react-modal';
import { useState } from 'react';

function BettingModal() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
<<<<<<< HEAD
        <div>
            <button onClick={() => setModalOpen(true)}>Modal Open</button>
            <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen}>
                This is Modal content
                <button onClick={() => setModalOpen(false)}>Modal close</button>
            </Modal>
        </div>
=======
            <div className=''>
                <button onClick={() => setModalOpen(true)}>Modal Open</button>
                <Modal
                className='bettingModal'
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen}>
                    <GrClose className='modalClose' onClick={() => setModalOpen(false)} />
                    <div className='singerInfoContainer'>
                        <div className='profileContainer'>
                            <div className='profilePic'></div>
                        </div>
                        <div className='singerDetailcontainer'>
                            <div className='nameAndVoterate'>
                                <div className='singerNameContainer'>
                                    <p className='singerName'>IVE(아이브)</p>
                                </div>
                                <div>
                                    <p className='voterate'>70%</p>
                                </div>
                            </div>
                            <div className='pointAndRank'>
                                <div>
                                    <p className='betPoint'>모인 포인트: 12345 P</p>
                                </div>
                                <div>
                                    <p className='betRank'>1위</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='betContainer'>
                        <div className='betInfo'>
                            <p>내 포인트</p>
                            <p>현재 배당률</p>
                            <p>예상 배당금</p>
                            <p>잔여 포인트</p>
                        </div>
                        <div className='betInfo2'>
                            <p>일단 아무거나</p>
                            <p>1.1</p>
                            <p>77777777777</p>
                            <p>264000</p>
                        </div>
                        <div className='betInfo3'>
                            <p>P</p>
                            <p>%</p>
                            <p>P</p>
                            <p>P</p>
                        </div>
                    </div>
                    <div className='betBtnContainer'>
                        <button className='betBtn'>베팅하기</button>
                        <button className='betCanBtn' onClick={() => setModalOpen(false)}>취소하기</button>
                    </div>
                </Modal>
            </div>
>>>>>>> parent of 3ffa277 (베팅, 라인업 추가 모달 생성)
    );
};

export default BettingModal;