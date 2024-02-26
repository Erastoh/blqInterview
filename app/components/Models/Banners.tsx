// const Banners = ({ posts }) => {
//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Banners;
import React from 'react';

interface Post {
  id: number;
  title: string;
  // Add other properties as needed
}

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

export async function getStaticProps() {
  // Fetch data from API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  // Pass data to the page component as props
  return {
    props: {
      posts,
    },
  };
}