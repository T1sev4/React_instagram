import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
  return(
    <header className="header ptb4">
      <div className="container flex flex-jc-sb flex-ai-c">
        <div className="header_logo">
          <img src="/images/logo-insta.png" alt="logo" />
        </div>
        <div className="header_search flex flex-jc-c p1">
          <FontAwesomeIcon className='header_search_icon' icon={faMagnifyingGlass} />
          <input type='text' placeholder='Search'/>
        </div>
        <div className="header_icons flex">
          <img src='/images/header/home.svg' alt='' />
          <img src='/images/header/message.svg' alt='' />
          <img src='/images/header/NewPosts.svg' alt='' />
          <img src='/images/header/FindPeople.svg' alt='' />
          <img src='/images/header/heart.svg' alt='' />
          <img src='https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg' alt='' />
        </div>
      </div>
    </header>
  )
}