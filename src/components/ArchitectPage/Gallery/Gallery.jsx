import React from 'react';

import NoSSR from 'react-no-ssr';

import AwesomeSlider from 'react-awesome-slider';

import idGenerator from 'react-id-generator';

import AwsSliderStyles from './styles.scss';

import style from './style.module.css';


const gallery = ({ work }) => {
  const data = Object.values(JSON.parse(work.internal.content));
  const worksImg = data.map(el => (
    <div key={idGenerator()} data-src={el.img}>
      <p>{el.title}</p>
    </div>
  ));
  return (
    <NoSSR>
      <AwesomeSlider cssModule={AwsSliderStyles} className={style.Container}>
        {worksImg}
      </AwesomeSlider>
    </NoSSR>
  );
};
export default gallery;
