// import newPost from '../../../public/images/newPost.svg'
// import Image from 'next/image'
'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { editPost } from "@/app/store/slices/postSlice"
import { END_POINT } from "@/config/end-point"
import { useRouter } from "next/navigation"

export default function EditPostModalWindow({closeModal, closeDetail}){

  const router = useRouter()
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post)
  const currentUser = useSelector(state => state.auth.currentUser)
  console.log(post)
  console.log(currentUser)
  useEffect(() => {
    if(post.id){
      setSelectedImage(post.image)
      setImage(post.image)
      setDescription(post.description)
    }
  }, [post])

  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState()
  const [description, setDescription] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  
  const sendPost = () => {
    const formData = new FormData();
    formData.append('image', image);  // 'image' - это имя поля в вашем бэкенде
    formData.append('description', description);  // если у вас есть другие поля
    formData.append('id', post.id)
    dispatch(editPost(formData, router, currentUser.id, post, {image: selectedImage, description: description}))
    setSelectedImage(null)
    setDescription('')
    closeModal()
    closeDetail()
  }

  return(
    <>
      <div className="modal_window">
        <button onClick={closeModal} className="modal_close_btn"><FontAwesomeIcon icon={faXmark} /></button>
        <div className="edit_content">
          <div className="edit_content_header flex flex-jc-sb flex-ai-c p4">
            <FontAwesomeIcon onClick={() => {
              setDescription('')
              setStep(1)
            }} className="back" icon={faArrowLeft} />
            <h2>Создание публикации</h2>
            <a onClick={sendPost}>Поделиться</a>
          </div>
          <div className="edit_post_space flex">
            <div className="edit_post_image">
              {image && image.slice(0, 7) === "/images" && <img src={`${END_POINT}${selectedImage}`} alt="post image" />}  
              {image && image.slice(0, 7) !== "/images" && <img src={selectedImage} alt="post image" />}  
            </div> 
            <div className="create_content">
              <div className="create_content_header">
                <img src="https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg" alt="" />
                <p>terrylucas</p>
              </div>
              <div className="create_post_textarea">
                <textarea onChange={(e) => {setDescription(e.target.value)}} value={description}></textarea>
                <div>
                  <svg aria-label="Смайлик" className="x1lliihq x1n2onr6" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Смайлик</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                  <p> {description.length} / 2,200 </p>
                </div>
              </div>
              <button className="button">Изменить картинку<input
              type="file"
              accept=".jpg, .jpeg, .png, .gif, .webp"
              onChange={handleImageUpload}
              className="input-file"
              name="image"
            /></button>

            </div>
          </div>
        </div>
      </div>


    </>
   
  )
}