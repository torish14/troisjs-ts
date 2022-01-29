# Vue 3 + Typescript + Vite + TroisJS

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Usage
TroisJS needs `Renderer` and `Camera` and `Scene`.
```
<template>
	<Renderer>
		<Camera :position="{ z: 100 }" />
		<Scene>
			<Box :size="10">
				<BasicMaterial />
			</Box>
		</Scene>
	</Renderer>
</template>
```

### Renderer
**Props from THREE.WebGLRenderer**
| Name | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| alpha | キャンバスにアルファ(透明度)バッファが含まれているかどうか | Boolean | false |
| antialias | アンチエイリアシングを行うかどうか | Boolean | false |
| autoClear | フレームをレンダリングする前にレンダラーが自動的に出力をクリアにするかどうか | Boolean | true |

**Custom Props**
| Name | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| alpha | キャンバスにアルファ(透明度)バッファが含まれているかどうか | Boolean | false |
| antialias | アンチエイリアシングを行うかどうか | Boolean | false |
| autoClear | フレームをレンダリングする前にレンダラーが自動的に出力をクリアにするかどうか | Boolean | true |

**Events API**
| Name | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| alpha | キャンバスにアルファ(透明度)バッファが含まれているかどうか | Boolean | false |
| antialias | アンチエイリアシングを行うかどうか | Boolean | false |
| autoClear | フレームをレンダリングする前にレンダラーが自動的に出力をクリアにするかどうか | Boolean | true |

**Custom render function**
```js
const renderer= this.$refs.renderer
renderer.onInit() => {
	renderer.renderFn = () => {
		// do what you want
	}
}
```

**Access ThreeeJS renderer**
```html
<Renderer ref="renderer">
...
</Renderer>
}
```
```js
const renderer = this.$ref.renderer.renderer
```

**Access ThreeJS OrbitControls**
```js
const orbitCtrl = this.$ref.renderer.three.cameraCtrl
```

**Events**
```js
orbitCtrl.addEventListener('change', () => {
	// Do something when the camera has been transformed by controls.
})

orbitCtrl.addEventListener('start', () => {
	// Do something when an interaction was initiated.
})

orbitCtrl.addEventListener('end', () => {
	// Do something when an interaction has finished.
})
```

**Properties Methods**
```js
orbitCtrl.enablePan = false
```

### Camera
**Props from THREE.PerspectiveCamera**
| Name | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| aspect | カメラの視錐台のアスペクト比 | Number | 1 |
| far | カメラの視錐台の断面図景 | Number | 2000 |
| fov | カメラの視錐台の垂直画角 | Number | 50 |
| near | カメラの視錐台の近傍面 | Number | 0.1 |
| position | カメラ位置 | Object | { x: 0, y: 0, z: 0 |
| lookAt | カメラターゲット | Object |  |

**Access ThreeJS camera**
```html
<Camera ref="camera" />
```

```js
const scene = this.$ref.camera.camera
```

### Scene
**Scene.ts and THREE.Scene**
| Name | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| background | 背景色 | String, Number |  |

**Access ThreeJS scene**
```html
<Scene ref="scene">
	...
</Scene>
```

```js
const scene = this.$ref.scene.scene
```

### Render loop
>🚨 WARNING
> レンダリングループは通常 60 fps で動作します
> troisjs コンポーネントの更新は reactivity を使わず､直接 ThreeJS オブジェクトを更新してください
```
<template>
  <Renderer ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
export default {
  mounted() {
    const renderer = this.$refs.renderer
    const box = this.$refs.box.mesh
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01
    })
  }
}
</script>
```

[TroisJS Document](https://troisjs.github.io)
