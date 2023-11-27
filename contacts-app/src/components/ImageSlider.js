import React, { useEffect } from 'react';

const ImageSlider = ({children}) => {
  useEffect(() => {
    const track = document.getElementById("image-track");

    const handleOnDown = e => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;
    
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
      track.dataset.percentage = nextPercentage;
    
      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`
        },
        { duration: 1200, fill: "forwards" }
      );
    
      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };
    // Event listeners
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('ontouchstart', e => handleOnDown(e.touches[0]));
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('ontouchend', e => handleOnUp(e.touches[0]));
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('ontouchmove', e => handleOnMove(e.touches[0]));

    // Cleanup
    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('ontouchstart', e => handleOnDown(e.touches[0]));
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('ontouchend', e => handleOnUp(e.touches[0]));
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('ontouchmove', e => handleOnMove(e.touches[0]));
    };
  }, []);

  return (
    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        {children}
    </div>
  );
};

export default ImageSlider;
