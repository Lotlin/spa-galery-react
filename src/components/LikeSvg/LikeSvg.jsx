import style from './LikeSvg.module.css';

export const LikeSvg = () => (
  <svg className={`style.LikeSvg ${style['LikeSvg--photo-item']}`}
    id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor">
    <path d="M16.4 6c2 0 3.6 1.6 3.6 3.6 0 2-3.9
      6.4-8 9.8-4.1-3.5-8-7.9-8-9.8C4 7.6 5.6 6 7.6 6 10 6 12 9 12 9s1.9-3
      4.4-3zM16.4 4c-1.8 0-3.4.9-4.4 2.3C11 4.9 9.4 4 7.6 4 4.5 4 2
      6.5 2 9.6c0 4.4 10 12.4 10 12.4s10-8 10-12.4C22 6.5 19.5 4 16.4 4z"
    />
  </svg>
);
