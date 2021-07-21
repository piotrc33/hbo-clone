import { useStateContext } from "../components/HBOProvider";
import ls from 'local-storage';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';
import Login from '../components/ui/Login/Login';

function LoginUser() {
    return (
        <Login />
    )
}

export default LoginUser
