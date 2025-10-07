document.addEventListener("DOMContentLoaded",()=>{
  const track=document.querySelector(".carousel-track");
  if(track){
    const slides=Array.from(track.children);
    let index=1;
    const firstClone=slides[0].cloneNode(true);
    const lastClone=slides[slides.length-1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone,slides[0]);
    const updatedSlides=Array.from(track.children);
    track.style.transform=`translateX(-${index*100}%)`;

    setInterval(()=>{
      if(index>=updatedSlides.length-1){
        index=1;
        track.style.transition="none";
        track.style.transform=`translateX(-${index*100}%)`;
      }
      setTimeout(()=>{
        index++;
        track.style.transition="transform .6s ease";
        track.style.transform=`translateX(-${index*100}%)`;
      },20);
    },3000);
  }
});