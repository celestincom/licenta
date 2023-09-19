import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import Navbar from "@/components/Layout/components/Navbar";

export default function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import("../../components/Map/index"), {
        ssr: false,
      }),
    []
  );

  return (
    <>
    {/* <Navbar /> */}
      <div style={{ width: '50vw', height: '50vh' }}>
        <Map />
      </div>
    </>
  );
}
