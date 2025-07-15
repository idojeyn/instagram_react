import './rightSide.css'
import userdata from '../../users.json'
const RightSide = ({ handleLogout, user,handleChange,followStatus }) => {


  const users = userdata.user
  return (
    <div className='rightSideHome'>
      <div className="topProfileRight">
        <div className="leftRightProfile">
          <div className="imgDivRightSide">
            <img className='imageRightSideProfile' src="/images/user1.jpg" alt="rasm" />
          </div>
          <div className="userNameBlock">
            <div className="userNameRightSide">{user.nickname}</div>
            <div className="userFullName">{user.fullname}</div>
          </div>
        </div>
        <div onClick={handleLogout} className="switchBtn">
          Logout
        </div>
      </div>
      <div className="bottomRightSide">
        <div className="suggestedBlock">
          <div className="suggestedForYou">Suggested for you</div>
          <div className="seeAll">See All</div>
        </div>
        <div className="followBlockRightSide">
          {
            users?.map((item, i) => {
              const isFollowing = followStatus[i] || false;

              return (
                <div key={i} className="topProfileRightBottom">
                  <div className="leftRightProfile">
                    <div className="imgDivRightSide">
                      <img className='imageRightSideProfile' src={item.profileImg} alt="rasm" />
                    </div>
                    <div className="userNameBlock">
                      <div className="userNameRightSide">{item.username}</div>
                      <div className="userFullName">{item.fullName}</div>
                    </div>
                  </div>
                  <div onClick={() => handleChange(i)} className="switchBtn">
                    {isFollowing ? 'Unfollow' : 'Follow'}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default RightSide