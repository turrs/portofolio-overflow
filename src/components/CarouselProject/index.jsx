import { Carousel, Col, Row } from 'antd';
import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProjectItems from '../ProjectItems';
import {
  IadminStaycation,
  Iallforum,
  IdataOn,
  IdekilSwap,
  Imarketplace,
  Ipoonft,
  Irestaurant,
  Istaycation,
} from '../../assets/images';
const CarouselProject = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="flex flex-row flex-wrap">
      <div className="p-1">
        <ProjectItems
          image={IdataOn}
          title="Data On Training"
          description="create crud training event | admin : admin password : admin1234"
          url="https://data-on-training.vercel.app"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={IadminStaycation}
          title="Admin Staycation BWA"
          description="create admin dashboard for website staycationn using MERN | admin : admin password : rahasia"
          url="https://admin-stay.herokuapp.com/admin/dashboard"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={Irestaurant}
          title="Restaurant use Redux"
          description="Learn create restaurant app use redux, Note: just save data in state global and not use API, the consequence data will lost if you refresh page "
          url="https://restaurant-redux-app.vercel.app/"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={Istaycation}
          title="Staycation App"
          description="create app to booking hotel use nextjs + tailwind"
          url="https://staycation-neon.vercel.app/"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={Ipoonft}
          title="PooNFT"
          description="create app magiceden lite is marketplace nft in solana blockchain use nextjs + tailwind"
          url="https://poonft.vercel.app/"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={IdekilSwap}
          title="Dexswap"
          description="create app dex (decentralize exchange) on Polygon Blockchain use 0xapi,rainbow adapter wallet, ether and wagmi"
          url="https://dekilswap-testnet.vercel.app/"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={Iallforum}
          title="All-Forum"
          description="create app forum is app discussion user can ask question and answer question, build use CRA with styling tailwind and redux for state management."
          url="https://allforum.vercel.app/"
        />
      </div>
      <div className="p-1">
        <ProjectItems
          image={Imarketplace}
          title="Shoppify Marketplace App"
          description="create app shoppify is marketplace where user can buy items on website, build with Typescript using react,next js, redux for state management and tailwind for styling"
          url="https://shoppify-chi.vercel.app/"
        />
      </div>
    </div>
  );
};

export default CarouselProject;
// eslint-disable-next-line react/prop-types
const SlickButtonLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <LeftOutlined {...props}>{children}</LeftOutlined>
);
// eslint-disable-next-line react/prop-types
const SlickButtonRight = ({ currentSlide, slideCount, children, ...props }) => (
  <RightOutlined {...props}>{children}</RightOutlined>
);
