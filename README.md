# Getting Started with React

This project will get you started using Stadia Maps in a React application. It was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app) and the
[@mapcomponents/cra-template](https://github.com/mapcomponents/react-map-components-maplibre-cra-template) template.

You can quickly bootstrap a new full-screen map app using the provided MapComponents template like so:

```shell
npx create-react-app react-map-demo --template @mapcomponents/cra-template
```

Or you can just add `@mapcomponents/react-maplibre` using `npm` or `yarn` and import the `MapComponentsProvider`
where appropriate ([`index.js`](src/index.js) in this repo).

Adding a map to your page is easy: Pick a [vector map style](https://docs.stadiamaps.com/themes/) you like
and set ony other [MapLibre GL JS options](https://maplibre.org/maplibre-gl-js-docs/api/map/) and you've
already got a usable map.

```javascript
<MapLibreMap
  mapId="main_map"
  options={{
    zoom: 8,
    style: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
    center: [7.0851268, 50.73884],
  }}
/>
```

# Documentation

The official component documentation can be found here: https://mapcomponents.github.io/react-map-components-maplibre/
