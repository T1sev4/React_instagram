import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

export default function NewsPost(){
  return(
    <div className="newsPost">
      <div className="newPost_header">
        <div className='flex flex-ai-c gap2'>
          <img src="/images/posts/post2.jpg" alt="" />
          <h3>terrylucas</h3>
        </div>
        <FontAwesomeIcon icon={faEllipsis}  />
      </div>
      <div className='newPost_img'>
        <img src='/images/posts/post2.jpg' alt='' />
      </div>
      <div>
        <div className='newPost_icon flex flex-jc-sb flex-ai-c'>
          <div className='flex gap2'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faComment} />
          </div>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <div className='newPost_info'>
          <p className='newPost_info_likes'>1000 likes</p>
          <div className='flex gap2 mtb2'>
            <h3>terrylucas</h3>
            <p className='newPost_description'>lorem lorem lorem lorem</p>
          </div>
          <div className="comment_form">
            <svg aria-label="Смайлик" className="x1lliihq x1n2onr6" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Смайлик</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
            <input type="text" placeholder="Добавьте комментарий..." />
            <a>Опубликовать</a>
          </div>
        </div>
      </div>
    </div>
  )
}