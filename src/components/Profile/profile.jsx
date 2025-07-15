import './profile.css';
import userProfile from '../../userProfile.json'

const Profile = ({ user, posts }) => {
  const userprofile = userProfile.userprofile;



  const allUserPosts = [
    ...posts.map(post => ({
      image: post.postImg,
      likes: post.likes,
      commentsCount: post.commentsCount
    })),
    ...userprofile.Data
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src='/images/user1.jpg' alt="profile" className="profile-img" />
        <div className="profile-info">
          <h2>{user.nickname}</h2>
          <button className='btn btn-outline-dark'>Edit Profile</button>
          <div className="stats">
            <span><strong>{allUserPosts.length}</strong> posts</span>
            <span><strong>{userprofile.followers}</strong> followers</span>
            <span><strong>{userprofile.following}</strong> following</span>
          </div>
          <div className="fullname">{user.fullname}</div>
        </div>
      </div>

      <div className="profilePost">
        <div className="row">
          {allUserPosts.map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4 p-1">
              <div className="media-1">
                <img src={item.image} alt="Img" className="img-fluid mb-lg-0 mb-4" />
                <div className="media-1-content img-fluid">
                  <p><i className="fas fa-heart"></i> {item.likes}</p>
                  <p><i className="fa-solid fa-comment"></i> {item.commentsCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
