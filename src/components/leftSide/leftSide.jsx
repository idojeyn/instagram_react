import { useNavigate } from 'react-router-dom';
import './leftSide.css';

const LeftSide = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };
  
  return (
    <div className='leftSidePart'>
      <div className="logoPart">
        <img className='logoimg' src='/images/Instagram-Logo-2016-present.png' alt="logo" />
      </div>
      <div className="navlinkPart">
        <div className="navlink">
          <div onClick={() => goTo('/home')} className='navName'>
            <i className="fa-solid fa-house"></i> Home
          </div>
        </div>
        <div className="navlink">
          <div onClick={() => goTo('/search')} className='navName'>
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </div>
        </div>
        <div className="navlink">
          <div onClick={() => goTo('/explore')} className='navName'>
            <i className="fa-regular fa-compass"></i> Explore
          </div>
        </div>
        <div className="navlink">
          <div  className='navName'>
            <i className="fa-regular fa-circle-play"></i> Reels
          </div>
        </div>
        <div className="navlink">
          <div className='navName'>
            <i className="fa-regular fa-comment-dots"></i> Messages
          </div>
        </div>
        <div className="navlink">
          <div  className='navName'>
            <i className="fa-regular fa-heart"></i> Notifications
          </div>
        </div>
        <div className="navlink">
          <div onClick={() => goTo('/create')} className='navName'>
            <i className="fa-regular fa-square-plus"></i> Create
          </div>
        </div>
        <div className="navlink">
          <div  className='navName'>
            <i className="fa-solid fa-chart-column"></i> Dashboard
          </div>
        </div>
        <div className="navlink" onClick={() => goTo('/profile')}>
          <img className='profileImg' src="/images/user1.jpg" alt="user" />
          <div className='navName'>Profile</div>
        </div>
        <div className="navlink">
          <div className='navName'>
            <i className="fa-solid fa-bars"></i> More
          </div>
        </div>
        <div className="navlink">
          <div className='navName'>
            <i className="fa-solid fa-cubes"></i> Also from Meta
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
