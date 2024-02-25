<script setup lang="ts">

import {TresCanvas} from "@tresjs/core";
import {BasicShadowMap, NoToneMapping, SRGBColorSpace} from "three";
import {OrbitControls} from "@tresjs/cientos";
// get props from the parent component
const props = defineProps(["textureSphere"]);

console.log(props.textureSphere)
import { useTexture, useRenderLoop } from "@tresjs/core";
import { Suspense, shallowRef } from "vue";
const pbrTexture = await useTexture({
  map: props.textureSphere,
});

const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  ToneMapping: NoToneMapping
}

const sphereRef = shallowRef(null)
const orbitRef = shallowRef(null)
const { onLoop } = useRenderLoop();
let isMobile = window.innerWidth < 600;

let positionCamera = [0, 0, 2.4];
onLoop(({ delta }) => {
  if (sphereRef.value) {
    sphereRef.value.rotation.y += 0.003
    // orbitRef.value.value.enabled = window.innerWidth >= 767;
  }

});

</script>


<template>
  <div class="tres-container">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera  :position="[0,0,2.4]"/>
      <TresMesh ref="sphereRef">
        <TresSphereGeometry  :args="[1,32,32]"/>
        <TresMeshStandardMaterial v-bind="pbrTexture" displacement-scale="0.2"/>
        <TresDirectionalLight :position="[0, 2, 4]" :intensity="2" cast-shadow />
        <TresAmbientLight :intensity="0.1" />
        <OrbitControls ref="orbitRef"  :maxPolarAngle="Math.PI / 2" :minPolarAngle="Math.PI / 2" :enable-pan="false" :enable-zoom="false" />
      </TresMesh>
    </TresCanvas>
  </div>
</template>

<style>
</style>