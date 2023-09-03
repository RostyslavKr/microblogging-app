"use client";
import React from 'react';
import { useQuery } from 'react-query';
import supabase from '../../supabase';
import { posts } from '../../posts';
// const fetchPosts = async () => {
  
//   const { data, error } = await supabase.from('posts').select('*');
//   if (error) {
//     throw new Error(error.message);
//   }
//   return data;
// };
//  const { data: posts, error } = useQuery('posts', fetchPosts);
export default function PostList (){ 
 
 

  return (
    <div>
      <h2>General list posts</h2>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.author_id}>{post.content}</li>
          ))}
        </ul>
      ) : (
        <p>There are no posts.</p>
      )}
    </div>
  );
};

