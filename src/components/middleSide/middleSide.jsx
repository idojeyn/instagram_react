import './middleSide.css'
import story from '../../story.json'
import post from '../../post.json'
import { useState } from 'react'
import RightSide from '../rightSide/rightSide'
import { useNavigate } from 'react-router-dom'

const MiddleSide = ({ user, setIsRegistered }) => {

    const [followStatus, setFollowStatus] = useState({})
    const [Like, setLike] = useState({})
    const [save, setSave] = useState({})
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isRegistered');
        localStorage.removeItem('user');
        setIsRegistered(false);
        navigate('/');
    };

    
    const handleChange = (index) => {
        setFollowStatus((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    const handleLike = (index) => {
        setLike((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleSave = (index) => {
        setSave((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    }

    const storys = story.story
    const posts = post.post
    return (
        <>
            <div className="meddle">
                <div className="leftmeddle">
                    <div className="middleHomeSide">
                        <div className="storyBlock">
                            {
                                storys?.map((item, i) => {
                                    return (
                                        < div key={i} className="storyParticular" >
                                            <div className="img">
                                                <img className='statusImg' src={item.img} alt="rasm" loading="lazy"/>
                                            </div>
                                            <div className="profileName">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="postSection">
                            <div className="post">
                                <div className="caught-up-container">
                                    <div className="checkmark">
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                    <h2>You're all caught up</h2>
                                    <p>You've seen all new posts from the past 3 days.</p>
                                </div>
                            </div>
                            {posts?.map((item, i) => {
                                const isFollowing = followStatus[i] || false;
                                const isLike = Like[i] || false;
                                const isSave = save[i] || false;
                                return (
                                    <div key={i} className="post">
                                        <div className="postInfo">
                                            <img className='postInfoImg' src={item.profileImg} alt="rasm" />
                                            <div className="postinfoUserName">{item.username}</div>
                                            <div className="timingInfo">{item.time}</div>
                                            <div onClick={() => handleChange(i)} className="switchBtn">
                                                {isFollowing ? 'Unfollow' : 'Follow'}
                                            </div>
                                        </div>

                                        <div className="posting">
                                            <img className='postImage' src={item.postImg} alt="rasm" loading="lazy"/>
                                        </div>
                                        <div className="iconBlock">
                                            <div className="lefticon">
                                                <i onClick={() => handleLike(i)} className={`fa-heart heart-icon ${isLike ? 'fas liked' : 'far'}`}></i>
                                                <i className="fa-regular fa-comment"></i>
                                                <i className="fa-regular fa-paper-plane"></i>
                                            </div>
                                            <div className="righticon">
                                                <i onClick={() => handleSave(i)} className={`fa-bookmark bookmark-icon ${isSave ? 'fas' : 'far'}`}></i>
                                            </div>
                                        </div>
                                        <div className="likeSection">
                                            <div className="imagesLike">
                                                <img className='likeImg' src={item.likedBy[0]} alt="rasm" />
                                                <img className='likeImg1' src={item.likedBy[1]} alt="rasm" />
                                            </div>
                                            <div className="noOfLikes">{isLike ? item.likes +1  : item.likes } Likes</div>
                                        </div>
                                        <div className="postAbout">
                                            <div className="postAboutName">{item.caption}</div>
                                            <div className="infoComment">{item.commentsCount}</div>
                                        </div>
                                        <div className="noOfComment">View All 435 Comments</div>
                                        <div className="addComment">Add a Comment...</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div >
                </div>
                <div className="rightSideHome">
                    <RightSide handleLogout={handleLogout} user={user} followStatus={followStatus} handleChange={handleChange}/>
                </div>
            </div>
        </>
    )
}

export default MiddleSide