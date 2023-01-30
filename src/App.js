import "./App.css";
import { MapLibreMap, MlNavigationTools } from "@mapcomponents/react-maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

function App() {
  return (
    <>
      <MapLibreMap
        mapId="main_map"
        options={{
          zoom: 8,
          style: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
          center: [7.0851268, 50.73884],
        }}
      />
      <MlNavigationTools mapId="main_map" />
    </>
  );
}

export default App;
