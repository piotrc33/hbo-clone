
export default function Index() {
  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">
          Who Is Watching?
        </span>
      </div>

      <div className="login-user__form">
        <div className="login-user__user-box">
          <div className="login-user__user-img-border">
            <img className="login-user__user-img" src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="user_image" />
          </div>
          <div className="login-user__user-name">
            Sara
          </div>
        </div>

      </div>

      <div className="login-user__buttons">
        <div className="login-user__add-buttons">
          <button className="login-user__add-adult">Add Adult</button>
          <button className="login-user__add-kid">Add Kid</button>
        </div>

        <button className="login-user__manage-profiles">
          Manage Profiles
        </button>
      </div>
    </div>
  )
}
