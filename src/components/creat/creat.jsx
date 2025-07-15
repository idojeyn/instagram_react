import { useState } from 'react';
import './creat.css';
import { useNavigate } from 'react-router-dom';

const Creat = ({ addPost, user }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [state, setState] = useState('')
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handlePost = () => {
    if (!image || !caption || !user) {
      setState("Iltimos, barcha maydonlarni to'ldiring.")
      setTimeout(() => setState(''), 2500)
      return;
    }

    const newPost = {
      id: Date.now(),
      profileImg: "/images/user1.jpg",
      username: user.nickname,
      time: "hozir quyildi",
      postImg: image,
      caption: caption,
      likes: 0,
      likedBy: [],
      commentsCount: 0
    };

    addPost(newPost);
    navigate('/profile');
  };

  return (
    <div className="create-container">
      <h2>Yangi post qo'shish</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="rasm" className="preview-img" />}
      <textarea
        placeholder="Post sarlavhasi..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
      <div>{state}</div>
    </div>
  );
};

export default Creat;
