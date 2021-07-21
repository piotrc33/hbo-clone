import {useStateContext} from '/components/HBOProvider';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import ls from 'local-storage';
import { useMounted } from '../../Hooks/useMounted'

function Login() {
    const globalState = useStateContext();
    const {defaultUserImg} = globalState;
    const router = useRouter();
    const [loadingUsers, setLoadingUsers] = useState(false);
    let users = ls('users') !==null ? ls('users') : [];
    let { hasMounted } = useMounted();

    useEffect(() => {
        if(users < 1){
            setLoadingUsers(false);
        }
        console.log("load effect", users);
    }, []);

    const selectUser = (id) => {
        ls('activeUID', id);
        router.push('/home');
    }
    const showUsers = () => {
        if(!loadingUsers) {
            return users.map(user => (
                <div className="login-user__user-box" 
                    key={user.id}
                    onClick={() => selectUser(user.id)} >
                    <div className="login-user__user-img-border">
                        <img className="login-user__user-img" src={defaultUserImg} alt="user_image" />
                    </div>
                    <div className="login-user__user-name">
                        {user.user}
                    </div>
                </div>
            ));
        }
    }

    return (
        <div className="login-user">
            <div className="login-user__top">
                <div className="login-user__logo" />
                <span className="login-user__title">
                Who Is Watching?
                </span>
            </div>

            <div className="login-user__form">
                {hasMounted ? showUsers() : ''}
            </div>

            <div className="login-user__buttons">
                <div className="login-user__add-buttons">
                <button className="login-user__add-adult"
                    onClick={() => router.push('/create-user')} >Add Adult</button>
                <button className="login-user__add-kid"
                    onClick={() => router.push('/create-user')} >Add Kid</button>
                </div>

                <button className="login-user__manage-profiles">
                Manage Profiles
                </button>
            </div>
        </div>
    )
}

export default Login
