import Story from "./story"
import ModalWindowStory from "@/components/modal-window-story";
import { useState } from "react"
export default function Stories({onClick}){

  const [showModal, setShowModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const storiesArray = [
    {
      username: 'user 1',
      imageUrl: '/images/posts/post1.jpg'
    },
    {
      username: 'user 2',
      imageUrl: '/images/posts/post2.jpg'
    },
    {
      username: 'user 3',
      imageUrl: '/images/posts/post4.jpg'
    },
  ];


  const openModal = (story) => {
    setSelectedStory(story);
    setShowModal(true);

    setTimeout(() => {
      closeModal();
    }, 5000);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setShowModal(false);
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
