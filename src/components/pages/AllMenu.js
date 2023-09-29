import * as React from "react";

export default function MyComponent() {
  return (
    <div className="bg-white flex flex-col mb-10 max-md:max-w-full">
      <div className="flex flex-col self-stretch mt-5 mb-32 max-md:max-w-full">
        <div className="flex max-w-full w-[1280px] flex-col self-center px-5">
          <div className="flex flex-row justify-end items-center max-md:flex max-sm:hidden">
            <div className="flex max-w-full w-[427px] flex-row items-start self-center justify-between gap-5 max-md:flex-wrap max-md:gap-2.5 max-md:w-auto max-md:grow-0">
              <img alt='alt text'
                loading="lazy"
                src={require('../images/FD_Header.png')}
                className="aspect-[1] object-contain object-center w-[60px] h-[60px] shrink-0 self-center"
              />
              <a
                href="..."
                className="text-black text-opacity-90 tracking-widest uppercase text-sm self-center max-md:text-xs"
              >
                Menu
              </a>
              <a
                href="..."
                className="text-black text-opacity-90 tracking-widest uppercase text-sm self-center -mt-px max-md:text-xs"
              >
                Rewards
              </a>
              <a
                href="..."
                className="text-black text-opacity-90 tracking-widest uppercase text-sm w-[107px] self-center -mt-px max-md:text-xs"
              >
                Gift Cards
              </a>
            </div>
            <div className="flex flex-row self-center justify-end grow">
              <div className="flex flex-row max-md:mr-2.5">
                <img alt='alt text'
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86bdce22-6d01-42f5-a1d9-c2d9832edc44?"
                  className="aspect-[1] object-contain object-center w-8 h-8 shrink-0 self-center"
                />
                <a
                  href="..."
                  className="text-black text-opacity-90 tracking-normal text-sm self-center -mt-px max-md:text-xs"
                >
                  Find a store
                </a>
              </div>
              <div className="flex flex-row items-start self-center gap-4 ml-5 max-md:justify-center max-md:flex max-md:flex-row max-md:gap-2">
                <a
                  href="..."
                  className="text-black text-opacity-90 text-center text-sm self-stretch border pt-2.5 pb-2 px-4 rounded-[50px] border-solid border-black border-opacity-90 max-md:text-xs max-md:h-auto max-md:self-stretch max-md:items-center max-md:justify-center max-md:w-[75px] max-md:px-2.5"
                >
                  Sign in
                </a>
                <a
                  href="..."
                  className="text-white text-center tracking-normal text-sm self-stretch border bg-black pt-2.5 pb-3 px-4 rounded-[50px] border-solid border-black max-md:text-xs max-md:w-[75px] max-md:px-2.5"
                >
                  Join now
                </a>
              </div>
            </div>
          </div>
          <div className="bg-orange-400 bg-opacity-20 flex max-w-full w-full flex-col self-center mt-5 px-5 py-5 max-md:flex max-md:w-full max-sm:hidden">
            <div className="flex max-w-full w-[498px] flex-row items-start justify-between gap-5 ml-5 -mt-px max-md:flex-wrap max-md:justify-start">
              <a
                href="..."
                className="text-black text-opacity-90 tracking-normal text-xl self-stretch max-md:text-base"
              >
                Menu
              </a>
              <a
                href="..."
                className="text-black text-opacity-90 tracking-normal text-xl self-stretch max-md:text-base"
              >
                Featured
              </a>
              <a
                href="..."
                className="text-black text-opacity-90 tracking-normal text-xl self-stretch max-md:text-base"
              >
                Previous
              </a>
              <a
                href="..."
                className="text-black text-opacity-90 tracking-normal text-xl self-stretch max-md:text-base"
              >
                Favorites
              </a>
            </div>
          </div>
          <div id='AllMenu-section' className="flex flex-col items-stretch mt-8 mb-5 max-md:ml-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch leading-[normal] w-[33%] max-md:w-full">
                <div className="flex flex-col h-auto self-stretch gap-10 ml-10 max-md:hidden max-md:mr-auto max-sm:hidden">
                  <div className="flex flex-col max-md:w-auto">
                    <a
                      href="..."
                      className="text-black text-opacity-90 tracking-normal text-xl"
                    >
                      Drinks
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base w-[106px] mt-7"
                    >
                      Dalgona Iced
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base w-[102px] mt-6"
                    >
                      Regular Iced
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base mt-6"
                    >
                      Regular Hot
                    </a>
                  </div>
                  <div className="flex flex-col grow-0 max-md:w-auto">
                    <a
                      href="..."
                      className="text-black text-opacity-90 tracking-normal text-xl"
                    >
                      Food
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base w-[100px] mt-6"
                    >
                      Mie Nyemek
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-sm w-[107px] mt-6"
                    >
                      Croffle Original
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base w-[165px] mt-6"
                    >
                      Sate Bakso Seafood
                    </a>
                  </div>
                  <div className="flex flex-col items-stretch h-auto max-md:w-auto">
                    <a
                      href="..."
                      className="text-black text-opacity-90 tracking-normal text-xl"
                    >
                      Combo
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base w-[116px] mt-6"
                    >
                      Simple DalCro
                    </a>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base mt-6"
                    >
                      Combo 123
                    </a>
                  </div>
                  <div className="flex flex-col items-stretch h-auto max-md:w-auto">
                    <a
                      href="..."
                      className="text-black text-opacity-90 tracking-normal text-xl"
                    >
                      Topping
                    </a>
                    <div className="text-black text-opacity-60 tracking-normal text-base w-[197px] mt-5">
                      Lotus Bischoff Crumbles
                    </div>
                    <a
                      href="..."
                      className="text-black text-opacity-60 tracking-normal text-base w-[153px] mt-7"
                    >
                      Choco Crispy Balls
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch leading-[normal] w-[67%] max-md:w-full">
                <a
                  href="..."
                  className="text-white text-opacity-90 tracking-normal text-3xl bg-orange-700 bg-opacity-100 flex max-w-full w-full flex-col self-center rounded-r-md"
                >
                  Menu
                </a>
                <a
                  href="..."
                  className="text-orange-700 font-bold text-opacity-90 tracking-normal text-2xl border-t border-orange-300 flex-col mt-10"
                >
                  Drinks
                </a>
                <div className="flex flex-row flex-wrap gap-5 grow-0 mt-8 shadow-orange-200 shadow-md rounded-md">
                  <div className="flex max-w-full w-[235px] flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51844c7b-8db0-4db7-acd7-600559b65b9a?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[auto] self-center mt-px"
                    >
                      Dalgona Iced
                    </a>
                  </div>
                  <div className="flex max-w-full w-[236px] flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e50ea884-e766-419e-a700-21551c98c7c3?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[107px] self-center mt-px"
                    >
                      Regular Iced
                    </a>
                  </div>
                  <div className="flex max-w-full w-[231px] flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc335bdf-822a-4010-8f7b-1b258de0664a?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[102px] self-center mt-px"
                    >
                      Regular Hot
                    </a>
                  </div>
                </div>
                <a
                  href="..."
                  className="text-orange-700 font-bold text-opacity-90 tracking-normal text-2xl mt-10 border-t border-orange-300"
                >
                  Food
                </a>
                <div className="flex flex-row flex-wrap gap-5 mt-8 shadow-orange-200 shadow-md rounded-md">
                  <div className="flex flex-row items-start self-stretch gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1a67e46-1bf3-46d2-98fd-8d3c5c444b50?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[106px] self-center mt-px"
                    >
                      Mie Nyemek
                    </a>
                  </div>
                  <div className="flex max-w-full w-64 flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/62ce8a1c-36a6-40c5-9d3e-45ad88dbddcf?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[127px] self-center mt-px"
                    >
                      Croffle Original
                    </a>
                  </div>
                  <div className="flex max-w-full w-[226px] flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fc1725a-fc70-4991-bd94-83a44d345899?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg self-center"
                    >
                      Sate Bakso Seafood
                    </a>
                  </div>
                </div>
                <a
                  href="..."
                  className="text-orange-700 font-bold text-opacity-90 tracking-normal text-2xl mt-10 pt-0.5 border-t border-orange-300 flex-col"
                >
                  Combo
                </a>
                <div className="gap-5 self-center flex flex-row flex-wrap mr-auto mt-8 shadow-orange-200 shadow-md rounded-md">
                  <div className="flex flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/136cb68a-a6bb-4a8a-bbd3-5a8197595777?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[135px] self-center mt-px"
                    >
                      Simple DalCdro
                    </a>
                  </div>
                  <div className="flex flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f2a84-40ca-4420-bd65-d3f4458f62b2?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <a
                      href="..."
                      className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-base self-center -mt-px"
                    >
                      Combo 123
                    </a>
                  </div>
                </div>
                <a
                  href="..."
                  className="text-orange-700 font-bold text-opacity-90 tracking-normal text-2xl mt-10 border-t border-orange-300 flex-col"
                >
                  Topping
                </a>
                <div className="flex flex-row flex-wrap gap-5 mt-8 shadow-orange-200 shadow-md rounded-md">
                  <div className="flex max-w-full w-[244px] flex-row items-start gap-2.5">
                    <img alt='alt text'
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bd4811-c772-4197-bc65-da9ffb198317?"
                      className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center"
                    />
                    <div className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-base w-[115px] self-center my-auto">
                      Lotus Bischoff Crumbles
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch h-auto">
                    <div className="flex flex-row gap-2.5 grow-0">
                      <img alt='alt text'
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2332bad-49fa-4eba-bacd-e082f9f1e639?"
                        className="aspect-[1] object-contain object-center w-28 h-28 shrink-0"
                      />
                      <a
                        href="..."
                        className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[115px] text-left my-auto"
                      >
                        Choco Crispy Balls
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-full w-[534px] ml-0 flex-col self-center mt-16 px-5" />
      </div>
    </div>
  );
}
