import * as React from "react";
import data from "../database/menu.json";
import { animated, useTransition, config } from "react-spring";

export default function MyComponent() {
  const categoryTransitions = useTransition(data, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: {...config.default,delay: 1000},
  });
  return (
    <div className="bg-white flex flex-col max-md:max-w-full">
      <div className="flex flex-col self-stretch mt-5 mb-32 max-md:max-w-full">
        <div className="flex max-w-full w-[1280px] flex-col self-center lg:px-5 sm:pl-0 pr-4">
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
              <div className="hidden md:flex flex-col items-stretch w-[33%] max-md:w-full md:ml-4">
                {categoryTransitions((style, item) => (
                  <animated.div style={style} className="flex flex-col max-md:w-auto" key={item.category}>
                    <a href="..." className={`text-xl ${item === data[0] ? 'mt-0' : 'mt-10'}`}>
                      {item.category}
                    </a>
                    {item.items.map((item) => (
                      <a href={item.href} className="text-base mt-6" key={item.name}>
                        {item.name}
                      </a>
                    ))}
                  </animated.div>
                ))}
              </div>
              <div className="flex flex-col items-stretch leading-[normal] w-[67%] max-md:w-full">
                <a
                  href="..."
                  className="text-white text-opacity-90 tracking-normal text-3xl bg-orange-700 bg-opacity-100 flex max-w-full w-full flex-col self-center rounded-r-md"
                >
                  Menu
                </a>
                <div className="flex flex-col max-md:w-auto">
                {categoryTransitions((style, item) => (
                  <animated.div style={style} key={item.category} className="border-t border-orange-300 flex-col mt-10">
                    <a href="..." className="text-orange-700 font-bold text-opacity-90 tracking-normal text-2xl flex-col mt-10">
                      {item.category}
                    </a>
                    <div className="flex flex-row flex-wrap gap-4 mt-8 rounded-md">
                    {item.items.map((item) => (
                      <div className="flex gap-x-1">
                        <a href={item.link}>
                          <animated.img
                            alt="alt text"
                            loading="lazy"
                            srcSet={`${item.imageUrl}?&width=100 100w, ${item.imageUrl}?&width=200 200w, ${item.imageUrl}?&width=400 400w, ${item.imageUrl}?&width=800 800w, ${item.imageUrl}?&width=1200 1200w, ${item.imageUrl}?&width=1600 1600w, ${item.imageUrl}?&width=2000 2000w`}
                            className="aspect-[1] object-contain object-center w-28 h-28 shrink-0 self-center hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                        <a href="..." className="text-orange-800 font-semibold text-opacity-80 tracking-normal text-lg w-[130px] self-center mt-px">
                          {item.title}
                        </a>
                      </div>
                    ))}
                    </div>
                  </animated.div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
