import MyPosts from "../myposts"
export default function Profile(){

  const userPosts = [
    {
      description: 'test 1',
      img: ''
    },
    {
      description: 'test 1',
      img: ''
    },
    {
      description: 'test 1',
      img: ''
    },
    {
      description: 'test 1',
      img: ''
    },
    {
      description: 'test 1',
      img: ''
    },
    {
      description: 'test 1',
      img: ''
    },
  ]

  return(
    <div className="profile">
      <div className="profile_inner container">
        <div className="profile_person flex flex-ai-c">
          <div className="profile_avatar">
            <img src="" alt="" />
          </div>
          <div className="profile_text">
            <div className="profile_name_big flex flex-ai-c gap8">
              <h2>terrylucas</h2>
              <button className="button">follow</button>
            </div>
            <div className="profile_info flex gap4 mtb4">
              <a> <span>0</span> posts</a>
              <a> <span>0</span> followers</a>
              <a> <span>0</span> following</a>
            </div>
            <div className="profile_name_small">
              Terry Lucas
            </div>
          </div>
        </div>
        <MyPosts userPosts = {userPosts} />
      </div>
    </div>
  )
}