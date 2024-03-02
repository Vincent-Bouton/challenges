<script setup lang="ts">
let isCursorVisible = true;


document.addEventListener('mousemove', function(e) {
  if(isCursorVisible){
    const removeCursor = document.querySelectorAll('body, a, button')
    isCursorVisible = false;
    removeCursor.forEach(element => {
      element.style.cursor = 'none';
    });
  }
  const cursor = document.getElementById('cursor');
  if(!cursor) return;
  const after = document.getElementById('after');
  cursor.style.left = e.pageX-5 + 'px';
  cursor.style.top = e.pageY-5 + 'px';
  const height = after!.style.height === '' ? '30px': after!.style.height;
  // get just the number from height and width
  const heightNumber = parseInt(height.replace(/\D/g, ''));

  after!.style.left = e.pageX-heightNumber/2 + 'px';
  after!.style.top = e.pageY-heightNumber/2 + 'px';
  });

  const hoverables = document.querySelectorAll('a, button');
  hoverables.forEach(element => {
  element.addEventListener('mouseover', function(e) {
    const after = document.getElementById('after');
    after!.style.width = '60px';
    after!.style.height = '60px';
  });
  element.addEventListener('mouseout', function(e) {
    const after = document.getElementById('after');
    after!.style.width = '30px';
    after!.style.height = '30px';
  });
})


</script>
<template>
  <div id="cursor-container">
    <div id="cursor"></div>
    <div id="after"></div>
  </div>

</template>
<style>

#cursor, #after {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: difference; /* Invert colors */
  pointer-events: none; /* Ignore mouse events */
  z-index: 9999; /* Make sure the custom cursor is on top of everything else */
}

#cursor {
  background-color: white;
  z-index: 10000;
  height: 10px;
  width: 10px;
}

#after {
  height: 30px;
  width: 30px;
  background-color: rgba(255, 255, 255, 1);
  z-index: 100;
  transition: top 0.1s linear, left 0.1s linear, height .2s linear, width .2s linear; /* Add transition */
}
</style>