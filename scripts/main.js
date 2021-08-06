// Main Program 
const allPrograms = document.querySelectorAll("[id*='program-']");

function mediaResize() {
  if(window.innerWidth >=992 ) {
    for (let i = 5; i < allPrograms.length; i++) {
      allPrograms[i].classList.toggle('d-none');
    }
  } else {
    for (let i = 5; i < allPrograms.length; i++) {
      if (allPrograms[i].classList.contains('d-none')) {
        allPrograms[i].classList.toggle('d-none');
      }
    }
  }
}

mediaResize();

// window Resize
window.addEventListener('resize', () => {
  mediaResize();
});