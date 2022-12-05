import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import useBodyLockScroll from 'hooks/use-body-lock-scroll';
import useVideo from 'hooks/use-video';
import ArrowIcon from 'icons/arrow-right.inline.svg';
import PlayIcon from 'icons/play.inline.svg';

import VideoModal from '../video-modal';

import bgShapeSvg from './images/bg-shape.svg';
import StickerIcon from './images/sticker.inline.svg';

const items = [
  {
    text: 'Neon drops the invite gate! A generous free tier for everyone.',
    linkText: 'Read blog post',
    linkUrl: '/', // TODO: add missing link
  },
  {
    text: 'Neon drops the invite gate! A generous free tier for everyone.',
    linkText: 'Read blog post',
    linkUrl: '/', // TODO: add missing link
  },
  {
    text: 'Neon drops the invite gate! A generous free tier for everyone.',
    linkText: 'Read blog post',
    linkUrl: '/', // TODO: add missing link
  },
];

const Hero = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useBodyLockScroll(isOpenModal);
  const { containerRef, videoRef } = useVideo();
  return (
    <section className="safe-paddings relative bg-black pt-[182px] text-white xl:pt-[136px] lg:pt-[76px] md:pt-16 sm:pt-12">
      <img
        className="absolute top-0 left-1/2 w-full max-w-[1920px] -translate-x-1/2 blur-[80px]"
        src={bgShapeSvg}
        width={1920}
        height={760}
        alt=""
        aria-hidden
      />
      <Container className="flex flex-col items-center" size="md" ref={containerRef}>
        <time className="label-secondary-2 mx-auto" dateTime="2022-12-06">
          6th of December, 2022
        </time>
        <Heading className="mt-2.5 text-center" tag="h1" size="lg" theme="white">
          Neon is Live!
        </Heading>
        <p className="mt-3 text-center text-base xl:mt-2.5 md:mt-2">
          Welcome to Neon Developer Days. December 6-8, 2022.
        </p>
        <div className="relative mt-14 xl:mt-12 lg:mt-9 md:mt-6 sm:w-full">
          <StickerIcon className="absolute top-[-198px] right-[-154px] h-[300px] w-[300px] xl:hidden" />
          <div className="absolute -inset-x-16 top-16 md:w-[150%]">
            <StaticImage
              className="rounded-[200px] opacity-30 blur-[70px] md:h-[132px]"
              imgClassName="rounded-[200px]"
              src="./images/bg-gradient-hero.jpg"
              width={1068}
              height={520}
              alt=""
              loading="lazy"
              aria-hidden
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <svg
              width="940"
              height="520"
              className="rounded-2xl xl:w-full lg:max-h-[390px] sm:max-h-[211px]"
            >
              <rect width="940" height="520" className="fill-[#f3f281]" />
            </svg>
            <video
              className="absolute bottom-0 right-0 h-full w-auto max-w-none rounded-2xl md:right-10 xs:right-0"
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/pages/developer-days/dr-brown.mp4" type="video/mp4" />
              <source src="/videos/pages/developer-days/dr-brown.webm" type="video/webm" />
            </video>
          </div>
          <div className="absolute top-8 left-[38px] min-h-[520px] max-w-[330px] rounded-2xl bg-primary-1 px-5 pt-7 pb-8 lg:top-6 lg:left-6 lg:min-h-[442px] lg:max-w-[290px] lg:pb-7 lg:pt-6 md:static md:mx-auto md:-mt-2 md:min-h-0 md:w-[85%] md:max-w-none md:rounded-t-none">
            <Button
              className="w-full px-8 !text-lg lg:!text-base"
              theme="secondary"
              size="sm"
              style={{ boxShadow: '0px 10px 30px rgba(26, 26, 26, 0.6)' }}
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <PlayIcon className="mr-4 h-[22px] w-4 shrink-0 leading-none lg:h-4 lg:w-[11px] xs:mr-3" />
              <span>Watch broadcast</span>
            </Button>
            <ul className="mt-7 lg:mt-6">
              {items.map(({ text, linkText, linkUrl }, index) => (
                <li
                  className="group flex flex-col border-t border-dashed border-black border-opacity-40 py-6 text-black last:pb-0 lg:py-5"
                  key={index}
                >
                  <Link to={linkUrl}>
                    <p className="text-lg font-semibold leading-snug opacity-[85%] lg:text-base">
                      {text}
                    </p>
                    <span className="mt-3.5 inline-flex items-center space-x-2 font-semibold leading-none lg:mt-2">
                      <span>{linkText}</span>
                      <ArrowIcon className="h-auto w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <VideoModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} videoId="tu-bgIg-Luo" />
    </section>
  );
};

export default Hero;
