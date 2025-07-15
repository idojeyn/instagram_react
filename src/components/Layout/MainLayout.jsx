import LeftSide from '../leftSide/leftSide';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'

const MainLayout = () => {

  return (
    <div className="home">
      <div className="leftSideHome">
        <LeftSide />
      </div>

      <div className="middleSide">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
