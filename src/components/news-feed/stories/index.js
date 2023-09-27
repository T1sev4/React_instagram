import Story from "./story"
import ModalWindowStory from "@/components/modal-window-story";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getMyStories } from "@/app/store/slices/storySlice";
export default function Stories({onClick}){
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [timerId, setTimerId] = useState(null);
  
  const storiesArray = useSelector(state => state.story.stories)

  useEffect(() => {
    dispatch(getMyStories())
  }, [])
  
  // = [
  //   {
  //     username: 'user 1',
  //     imageUrl: '/images/posts/post1.jpg'
  //   },
  //   {
  //     username: 'user 2',
  //     imageUrl: '/images/posts/post2.jpg'
  //   },
  //   {
  //     username: 'user 3',
  //     imageUrl: '/images/posts/post4.jpg'
  //   },
  // ];


  const openModal = (story) => {
    setSelectedStory(story);
    setShowModal(true);

    // Отменяем предыдущий таймер, если он был установлен
    if (timerId) {
      clearTimeout(timerId);
    }

    // Устанавливаем новый таймер на закрытие модального окна через 5 секунд
    const newTimerId = setTimeout(() => {
      closeModal();
    }, 60000);

    setTimerId(newTimerId); // Сохраняем идентификатор нового таймера
  };

  const closeModal = () => {
    setSelectedStory(null);
    setShowModal(false);

    if (timerId) {
      clearTimeout(timerId);
    }
  };

  return(
    <>
      <div className="stories">
        {storiesArray.map((story, index) => <Story key={index} story={story} onClick={() => openModal(story)} />)}
      </div>
      {showModal && (<ModalWindowStory story={selectedStory} onClose={closeModal} />)}
    </>
  )
}
