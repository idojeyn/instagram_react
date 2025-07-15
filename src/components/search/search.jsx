import './search.css';
import profile from '../../profile.json';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const profiles = profile.profile;
  const filteredProfiles = profiles.filter((item) =>
    item.nickname.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Qidiruv..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && filteredProfiles.length > 0 && (
        filteredProfiles.map((item, i) => (
          <div key={i} className="render">
           <div className="leftRightProfile">
                    <div className="imgDivRightSide">
                      <img className='imageRightSideProfile' src={item.profileImg} alt="rasm" />
                    </div>
                    <div className="userNameBlock">
                      <div className="userNameRightSide">{item.fullname}</div>
                      <div className="userFullName">{item.nickname}</div>
                    </div>
                  </div>
          </div>
        ))
      )}

      {searchTerm && filteredProfiles.length === 0 && (
        <p>Bunday foydalanuvchi topilmadi</p>
      )}
    </div>
  );
};

export default Search;
