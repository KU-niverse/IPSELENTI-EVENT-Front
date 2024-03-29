import React from 'react';
import { useNavigate } from 'react-router-dom/dist'
import { useParams } from 'react-router-dom/dist';

function HistoryBox (props) {

  //const title = WikiToHtml(props.title);
  const ver = props.ver;
  const time = props.time;
  const studentid = props.studentid;
  const Navigator = useNavigate();
  const rollbacked = props.isrollback;
  const { id } = useParams();

  const rollbackToThisVer = () => {
    Navigator(`/wikihistory/${ver}`, {state: ver});
    
};


  return (
    <div className="wiki-contents content-one" >
      <li className='rollback-box'>
        <span>{ver}&ensp;{time}&ensp;{studentid}</span>
        <span className={rollbacked ? 'rollback-span' : 'hidden'}>({rollbacked}로 되돌림)</span>
        <button onClick={rollbackToThisVer} className='rollback-btn'>롤백</button>
      </li>
    </div>
  )
}
{/* <Link to="/wiki_edit"><button>편집</button></Link> */}

export default HistoryBox