import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 dark:text-white font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 dark:text-gray-300 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              <span className='dark:text-white cursor-pointer dark:hover:text-pink-600 hover:text-pink-600 transition duration-300 '>
              {post.title}
              </span>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
