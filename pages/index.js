import {useStateContext} from "../components/HBOProvider";
import Login from "../components/ui/Login/Login";
import {useEffect} from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if( loggedIn === false ) {
      router.push('/create-user');
    }
  }, [])

  return (
    <>
      <Login />
    </>
  )
}
