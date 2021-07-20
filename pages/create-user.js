import {useStateContext} from "../components/HBOProvider";
import ls from 'local-storage';
import {v4} from 'uuid';
import {useRouter} from 'next/router';

export default function CreateUser() {
    const globalState = useStateContext();
    const {user, createUserAction, defaultUserImg} = globalState;
    const router = useRouter();

    const saveUser = () => {
      let users = [], newUser;

      ls('users') < 1 ? users = [] : users = ls('users');
      newUser = {
        id: v4(),
        user: user,
        myListID: []
      }
      users.push(newUser);
      ls('users', users);
      router.push('/home');
    }

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
            <img 
            className="create-user__user-img" 
            src={defaultUserImg} 
            alt="user_image" />
          </div>
          
          <div className="create-user__input-group">
            <label htmlFor="name-input" >Name</label>
            <input 
            id="name-input" 
            type="text" 
            className="create-user__input-text" 
            value={user}
            onChange={createUserAction} />

            <div className="create-user__colors">
              <div className="create-user__color create-user__color--active"
                style={{
                  background: '#000',
                  background: 'linear-gradient(45deg, #e74c3c, #000000)'
              }} />
              <div className="create-user__color "
                style={{
                  background: '#f0c27b',
                  background: 'linear-gradient(45deg, #f0c27b, #4b1248)'
              }} />
              <div className="create-user__color "
                style={{
                  background: '#649173',
                  background: 'linear-gradient(45deg, #649173, #dbd5a4)'
                  }} />
              <div className="create-user__color "
                style={{
                  background: '#f2709c',
                  background: 'linear-gradient(45deg, #f2709c, #ff9472)'
                  }} />
              <div className="create-user__color "
                style={{
                  background: '#d53369',
                  background: 'linear-gradient(45deg, #d53369, #cbad6d)'
                  }} />
            </div> 
          </div>
        </div>
  
        <div className="create-user__buttons">
          <div className="create-user__add-buttons">
            <button className="create-user__save"
              onClick={saveUser} >Save</button>
            <button className="create-user__cancel">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
  