<template>
	<h1>
		Light Page
	</h1>
	<Renderer ref="renderer" resize="window" antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }" pointer>
		<Camera :position="{ x: 0, y: 0, z: 10 }"></Camera>
		<Scene background="#000000">
			<PointLight ref="light" :intensity="0.5" :position="{ x: 0, y: 0, z: 0 }">
				<Sphere :radius="0.1"></Sphere>
			</PointLight>
			<Group :rotation="{ x: -Math.PI / 2, y:0, z:0 }">
				<RectAreaLight color="#ff6000" :position="{ x: 0, y: 10, z: 1 }" v-bind="rectLightsProps"></RectAreaLight>
				<RectAreaLight color="#0060ff" :position="{ x: 10, y: 0, z: 1 }" v-bind="rectLightsProps"></RectAreaLight>
				<RectAreaLight color="#60ff60" :position="{ x: -10, y: 0, z: 1 }" v-bind="rectLightsProps"></RectAreaLight>
				<RectAreaLight color="#ffffff" :position="{ x: 0, y: -10, z: 1 }" v-bind="rectLightsProps"></RectAreaLight>
				<Plane :width="30" :height="30" :rotation="{ x: 0 }" :position="{ z: -3 }">
					<StandardMaterial :props="{ displacementScale: 0.2, roughness: 0, metalness: 0 }">
						<Texture :props="texturesProps" src="../public/Wood_Titles_002_basecolor.jpg"></Texture>
						<Texture :props="texturesProps" src="../public/Wood_Titles_002_height.jpg"></Texture>
						<Texture :props="texturesProps" src="../public/Wood_Titles_002_normal.jpg"></Texture>
						<Texture :props="texturesProps" src="../public/Wood_Titles_002_roughness.jpg"></Texture>
						<Texture :props="texturesProps" src="../public/Wood_Titles_002_ambientOcclusion.jpg"></Texture>
					</StandardMaterial>
				</Plane>
			</Group>
		</Scene>
		<EffectComposer>
			<RenderPass />
			<UnrealBloomPass :strength="0.3"></UnrealBloomPass>
			<FXAAPass></FXAAPass>
		</EffectComposer>
	</Renderer>
</template>

<script lang="ts">
// textures from https://3dtextures.me/2019/04/26/wood-tiles-002/
import { RepeatWrapping } from 'three'
import { AmbientLight, Camera, EffectComposer, FXAAPass, Group, Renderer, Plane, PointLight, RectAreaLight, RenderPass, Scene, Sphere, StandardMaterial, Texture, UnrealBloomPass } from 'troisjs'

export default {
	components: {
		AmbientLight, Camera, EffectComposer, FXAAPass, Group, Renderer, Plane, PointLight, RectAreaLight, RenderPass, Scene, Sphere, StandardMaterial, Texture, UnrealBloomPass
	},
	data() {
		return {
			texturesProps: {
				repeat: { x: 10, y: 10 },
				wrapS: RepeatWrapping,
				wrapT: RepeatWrapping,
			},
			rectLightsProps: {
				// rotation: { x: Math.PI / 2 }
				lookAt: { x: 0, y: 0, z: 1 },
				intensity: 5,
				width: 5,
				height: 5,
				helper: true
			}
		}
	},
	mounted() {
		const renderer = this.$refs.renderer
		const light = this.$refs.light
		const pointerV3 = renderer.three.pointer.positionV3
		renderer.onBeforeRender = () => {
			light.position.copy(pointerV3)
		}
	},
}
</script>

<style>
body, html {
	margin: 0;
	padding: 0;
}
body {
	overflow: hidden;
}
canvas {
	display: block;
}
</style>
