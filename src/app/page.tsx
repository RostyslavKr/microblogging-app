"use client"
import PostList from '../components/PostList';
import { useAuthContext } from '@/context';
export default function Home() {
  const { typeUser } = useAuthContext();
  return (
    <div>
      {typeUser !== "" && <PostList />}
      
   </div>
  )
}

// jIeymensU8D1W4dB

