'use client'

import MyProfile from "@/components/myprofile"
import Header from "@/components/header"
import DetailPostMD from "@/components/myposts/detail-post-modal-window"
import EditPostModalWindow from "@/components/modal-window-edit-post"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { getPostById } from "@/app/store/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "@/app/store/slices/authSlice"
import { getFollowers, getFollowings } from "@/app/store/slices/subscriptionSlice"
import Followers from "@/components/followers"

export default function Profile() {
  const dispatch = useDispatch()
  const {id} = useParams();
  // const post = useSelector(state => state.post.post)
  const user = useSelector(state => state.auth.user)
  const followers = useSelector((state) => state.subscription.followers)
  const followings = useSelector((state) => state.subscription.followings)

  const [isEditModalWindow, setIsEditModalWindow] = useState(false)
  const [detailModalWindow, setDetailModalWindow] = useState(false)
  const [isModalFollowers, setModalFollowers] = useState(false); 
  const [isModalFollowing, setModalFollowing] = useState(false); 
  const [currentPost, setCurrentPost] = useState({}) 
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для модального окна
  const [isModalCreateStory, setModalCreateStory] = useState(false); // Состояние для модального окна
  const [filteredFollowers, setFilteredFollowers] = useState();

  // const followers = [
  //   {
  //     full_name: 'Tamerlan',
  //     username: 'Tamik'
  //   },
  //   {
  //     full_name: 'Tamerlan',
  //     username: 'Tamik'
  //   },
  //   {
  //     full_name: 'Tamerlan',
  //     username: 'Tamik'
  //   },
  // ]

  useEffect(() => {
    dispatch(getUserById(id))
  }, [])
  useEffect(() => {
    user && dispatch(getFollowers(user.username))
    user && dispatch(getFollowings(user.username))
  }, [user])

  const handleCurrentPost = (post) => {
    setCurrentPost(post)
    setDetailModalWindow(true)
  }

  // const didMount = () => {
  //   dispatch(getPostById(id))
  // }

  // useEffect(didMount, []);


  // useEffect(() => {
  //   setCurrentPost(post)
  // }, [post])

  useEffect(() => {
    let newFollowers = followers.map(item => ({
      ...item,
      isFollow: false
    }))
    const updatedFollowers = followers.map(follower => {
      const following = followings.find(f => f.followingId === follower.followerId  && f.followerId === follower.followingId);
      return {
        ...follower,
        isFollow: !!following // Set isFollow to true if a match is found, otherwise false
      };
    });
    setFilteredFollowers(updatedFollowers)
  }, [followers, followings])


  return (
    <main>
      <Header openModal={() => setModalOpen(true)} />
      <MyProfile user={user} handleCurrentPost={handleCurrentPost} followers={followers} followings={followings} openFollowers={() => setModalFollowers(true)} openFollowing={() => setModalFollowing(true)}/>
      {detailModalWindow && <DetailPostMD close={() => {setDetailModalWindow(false)}} currentPost={currentPost} openEditModalWindow={() => setIsEditModalWindow(true)} />}
      {isEditModalWindow && <EditPostModalWindow closeModal={() => setIsEditModalWindow(false)} />}
      {isModalOpen && <ModalWindow closeModal={() => setModalOpen(false)} />}
      {isModalCreateStory && <ModalWindowCreateStory closeModal={() => {setModalCreateStory(false)}} />}
      {isModalFollowers && <Followers title="Followers" followers={filteredFollowers} close={() => setModalFollowers(false)} />}
      {isModalFollowing && <Followers title="Following" followings={followings} close={() => setModalFollowing(false)} />}
    </main>
  )
}
