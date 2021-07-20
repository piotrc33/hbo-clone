
export default function CreateUser() {
    return (
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">
            Create Profile
          </span>
        </div>
  
        <div className="create-user__form">
          <div className="create-user__user-img-border">
            <img className="create-user__user-img" src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="user_image" />
          </div>
          
          <div className="create-user__input-group">
            <label for="name-input" >Name</label>
            <input id="name-input" type="text" className="create-user__input-text" />

            <div className="create-user__colors">
              <div className="create-user__color create-user__color--active"
                style={{
                  background: '#000',
                  background: 'linear-gradient(45deg, #e74c3c, #000000)'
              }} />
              <div className="create-user__color "
                style={{
                  background: '#f0c27b',
                  background: 'linear-gradient(45deg, #f0c27b, #4b1248);'
              }} />
              <div className="create-user__color "
                style={{
                  background: '#649173',
                  background: 'linear-gradient(45deg, #649173, #dbd5a4);'
                  }} />
              <div className="create-user__color "
                style={{
                  background: '#f2709c',
                  background: 'linear-gradient(45deg, #f2709c, #ff9472);'
                  }} />
              <div className="create-user__color "
                style={{
                  background: '#d53369',
                  background: 'linear-gradient(45deg, #d53369, #cbad6d);'
                  }} />
            </div> 
          </div>
        </div>
  
        <div className="create-user__buttons">
          <div className="create-user__add-buttons">
            <button className="create-user__save">Save</button>
            <button className="create-user__cancel">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
  