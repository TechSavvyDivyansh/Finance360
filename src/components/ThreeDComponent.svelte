<canvas bind:this={canvas}></canvas>

<script>
   import { onMount } from 'svelte';
   import * as Spline from '@splinetool/runtime';

   let canvas;

   onMount(async () => {
      const spline = new Spline.Application(canvas);
      await spline.load('https://prod.spline.design/pFvwTJQcd0WH8l0U/scene.splinecode');

      // Example: Access an object in the scene by its name
    //   const cube = spline.findObjectByName('Cube');
    //   if (cube) {
    //      cube.position.x += 1; // Move the cube slightly
    //   }
   });
</script>

<style>
   canvas {
      width: 100%;
      height: 500px;
   }
</style>
