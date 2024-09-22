import React from 'react';
import './main.css';
import MainItem from './mainItem';
import { ReactComponent as FirstPicture } from '../../assets/1.svg';
import { ReactComponent as SecondPicture } from '../../assets/2.svg';
import { ReactComponent as ThirdPicture } from '../../assets/3.svg';
import MainItemHeader from './mainItemHeader';

const mainData = [
  {
    logo: <FirstPicture />,
    header: <MainItemHeader uncoloredText="Утренний " coloredText="кофе" />,
    description:
      'Кофеин воздействует на центральную нервную систему как природный “будильник”. Поэтому мы быстрее просыпаемся.',
  },
  {
    logo: <SecondPicture />,
    header: <MainItemHeader uncoloredText="Час " coloredText="медитации" />,
    description:
      'После практик оба полушария мозга начинают работать сбалансированно — это привносит порядок в вашу жизнь.',
  },
  {
    logo: <ThirdPicture />,
    header: (
      <MainItemHeader uncoloredText="Вперёд к " coloredText="свершениям!" />
    ),
    description:
      'Ресурсы каждого человека ограничены, поэтому нам необходимо беречь себя и вовремя останавливаться.',
  },
];

const Main = (props) => {
  return (
    <div className="main-container">
      <h1>Как это работает?</h1>
      <div className="main-items-container">
        {mainData.map((item) => (
          <MainItem
            header={item.header}
            description={item.description}
            logo={item.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
