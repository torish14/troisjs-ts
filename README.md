# Vue 3 + Typescript + Vite + TroisJS

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Usage
TroisJS needs `Reanderer` and `Camera` and `Scene`.
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

[TroisJS Document](https://troisjs.github.io)
