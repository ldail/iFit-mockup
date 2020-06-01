//Dependencies
import React, { useEffect, useState, useRef } from 'react';
import Reviews from './Reviews/Reviews';
import Videos from './Videos/Videos';
import Equipment from './Equipment/Equipment';

//Styling
import './Main.css';

const Main = ({topHeaderRef, subHeaderRef, isHeaderVisible, setIsHeaderVisible}) => {

  /*
  Determine the height of the hero image. For mobile, we need to take the window's height,
  subtract the headers, and also leave space at the bottom so it is obvious there is more to scroll to.
  The image's max size is 801 pixels height, so if it exceeds that, keep it at 801.
  */
  const [heroHeight, setHeroHeight] = useState(500);
  const [headerHeight, setHeaderHeight] = useState(500);
  useEffect(() => {
    const headerHeight = topHeaderRef?.current?.offsetHeight + (subHeaderRef?.current?.offsetHeight * (window.innerWidth >= 1028 ? 1 : 2));
    setHeaderHeight(headerHeight);
    const determinedHeight = window.innerHeight - (headerHeight) - 40 || 500;
    setHeroHeight(determinedHeight <= 801 ? determinedHeight : 801);
  },[subHeaderRef, topHeaderRef]);

  /*
  Effect: Have the hero text fade in. We separate it by two lines and fade them in after each other
  */
  const heroTextFirstRef = useRef(null);
  const heroTextSecondRef = useRef(null);
  useEffect(() => {
    heroTextFirstRef.current.classList.add('fade-in');
    heroTextSecondRef.current.classList.add('fade-in-delay');
  },[])


  /*
  Effect: When we scroll past the hero image, make the header disappear.
  We pass this prop in from App.js, and then also into Header.js
  */
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
    const currentScrollY = window.scrollY;

    //Scrolling down
    if (prevScrollY.current < currentScrollY && currentScrollY > heroHeight && isHeaderVisible) {
      setIsHeaderVisible(false);
    }
    console.log(prevScrollY.current);
    console.log(currentScrollY);

    //Scrolling down
    if (prevScrollY.current > currentScrollY && currentScrollY < heroHeight && !isHeaderVisible) {
      setIsHeaderVisible(true);
    }

    prevScrollY.current = currentScrollY;
    console.log(isHeaderVisible, currentScrollY);
  };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeaderVisible, setIsHeaderVisible, heroHeight]);



  const widthDifference = parseInt((window.innerWidth - 1441 - 1) / 2);


  return (
    <main 
      className="main"
      style={{marginTop: headerHeight}}
    >
      <div className="hero-image-container" style={{height: `${heroHeight}px`}}>
        <div className="hero-image" style={{height: `${heroHeight}px`, marginLeft: widthDifference > 0 ? `${widthDifference}px` : `0px` }} />
        <h2>
          <span ref={heroTextFirstRef}>The best personal training,</span>
          <span ref={heroTextSecondRef}>right in your own home</span>
        </h2>
        <button className="join blue-button">Join iFit Coach</button>
      </div>
      <Reviews />
      <Videos />
      <Equipment />
    </main>
  );
};

export default Main;