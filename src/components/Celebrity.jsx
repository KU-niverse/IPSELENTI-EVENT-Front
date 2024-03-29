import React, { useState } from 'react';
import BettingModal from './BettingModal';
import {FiChevronDown} from 'react-icons/fi'
import { useEffect } from 'react';



function Celebrity({loggedIn, setLoggedIn, celebList}) {
  /* const{celebList}=props; */
  const [showMore, setShowMore] = useState(false); // 더보기 버튼 클릭 여부 상태값
  // const [celebrank, setCelebrank] = useState(0); // 셀럽 등수


  

  const [visibleCelebs, setVisibleCelebs] = useState(celebList.slice(0, 3));
  useEffect(() => {setVisibleCelebs(celebList.slice(0,3));}, [celebList]); 


  const handleShowMore = () => {setShowMore(true); 
  setVisibleCelebs(celebList);
  };// 더보기 버튼 클릭 시 상태값 변경

  return (
    <div className='ranking_list'>
      {visibleCelebs.map((celeb, index) => {
        const celeb_rank=index+1;
        // console.log(user_point);
        return(
        <div className='info_box' key={celeb.celebrity_id}>
          <span className='celeb_rank'>{celeb_rank}</span>
          <div className='celeb_thumb'>
            <img id='celeb_thumb'src={celeb.celebrity_image} alt={celeb.celebrities_name} />
          </div>
          <div className='celeb_info'>
            <span id='celeb_name'>{celeb.celebrities_name}</span>
            <span id='celeb_betrate'>배당률&nbsp;{celeb.betRate}</span>
          </div>
          <div className='celeb_footer'>
            <span id='celeb_point'>{celeb.betting_amount.toLocaleString()} P</span>
            <BettingModal
            loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            celebId={celeb.celebrity_id}
            celebName={celeb.celebrities_name}
            voteRate={celeb.percent}
            profilePic={celeb.celebrity_image}
            betPoint={celeb.betting_amount}
            betRank={celeb_rank}
            dividendRate={celeb.betRate}
            myPoint={celeb.user_point}
           // bettingAmount={c.betting_amount}//
            id='celeb_bet' />
          </div>
          <div className='celeb_graph'>
            <span id='celeb_per'>
              <span id='celeb_bg' style={{ width: `${celeb.percent}%` }}></span>
            </span>
            <span className='celeb_per_text'>{celeb.percent}%</span>
          </div>
        </div>
        );
      })}
    
    {!showMore && (
        <div className='show_more' onClick={handleShowMore}>
          <button id='celeb_showmore'>더보기<FiChevronDown/></button>
        </div>
      )}
    </div>);
};


export default Celebrity;