import './explore.css'
import exploredata from '../../explore.json'

const Explore = () => {
  const explores = exploredata.data
  return (
    <div className='container'>
      <div className="container1">
        <div className="row">
        {explores?.map(item => {
          return (
            <div key={item.id} className="col-md-6 col-lg-4 p-1">
              <div className="media-1">
                <img src={item.image} alt="Img" className="img-fluid mb-lg-0 mb-4"  />
                <div className="media-1-content img-fluid">
                  <p><i className="fas fa-heart"></i> {item.likes}</p>
                  <p><i className="fa-solid fa-comment"></i> {item.commentsCount}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default Explore