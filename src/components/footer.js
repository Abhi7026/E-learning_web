import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-footerBg text-secondaryText px-8 xl:px-24 pt-16 pb-14'>
      <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
        <div className='flex divide-x-2 text-sm'>
          <h3 className='pr-10'>About </h3>
          <h3 className='px-3'>Contact </h3>
          <h3 className='px-3'>Teach on Smart Academy</h3>
          <h3 className='px-3'>Terms</h3>
          <h3 className='pl-9'>Blog</h3>
        </div>
      </div>

      <div className='flex justify-between items-center text-sm mt-10'>
        <div className='flex gap-4 ml-4'>
          <a
            href='https://twitter.com/i/flow/login?redirect_after_login=%2Flogin'
            target='_blank'
            rel='noreferrer'
          >
            <TwitterIcon fontSize='large' />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon fontSize='large' />
          </a>
          <a href='http://facebook.com/' target='_blank' rel='noreferrer'>
            <FacebookIcon fontSize='large' />
          </a>
          <a href='http://youtube.com/' target='_blank' rel='noreferrer'>
            <YouTubeIcon fontSize='large' />
          </a>
        </div>
        <p>
          
          <div class='right-side'>
          Developed by{'  '}
  <span className='text-primary'>
    <a href='https://www.linkedin.com/in/abhi7026/' target='_blank' rel='noreferrer'>
      Abhinandan Kumar
    </a>
  </span>
</div>
        </p>
      </div>
    </div>
  );
};

export default Footer;