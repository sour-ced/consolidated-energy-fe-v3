"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OFFICES } from "@/lib/offices";
import { useOfficeMap } from "./OfficeMapContext";

const pinIcon = L.divIcon({
  className: "office-pin",
  html: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#0b0d0b" stroke-width="1.4">
    <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" fill="#35e6a4" stroke-linejoin="round" />
    <circle cx="12" cy="9.5" r="2.3" fill="#0b0d0b" stroke="none" />
  </svg>`,
  iconSize: [30, 30],
  iconAnchor: [15, 28],
  popupAnchor: [0, -24],
});

const bounds = L.latLngBounds(OFFICES.map((office) => office.position));

const CARTO_KEY = process.env.NEXT_PUBLIC_CARTO_API_KEY;

function MapController({
  markers,
}: {
  markers: React.MutableRefObject<Record<string, L.Marker | null>>;
}) {
  const map = useMap();
  const { focused } = useOfficeMap();

  useEffect(() => {
    map.fitBounds(bounds, { padding: [48, 48] });
  }, [map]);

  useEffect(() => {
    if (!focused) return;
    map.flyTo(focused.position, 10, { duration: 1.1 });
    markers.current[focused.code]?.openPopup();
  }, [focused, map, markers]);

  return null;
}

export default function OfficeMap() {
  const markers = useRef<Record<string, L.Marker | null>>({});

  return (
    <MapContainer center={bounds.getCenter()} zoom={4} scrollWheelZoom={false} className="h-full w-full">
      {CARTO_KEY ? (
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png?key=${CARTO_KEY}`}
          subdomains="abcd"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
      ) : (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="map-tiles-dark"
        />
      )}
      <MapController markers={markers} />
      {OFFICES.map((office) => (
        <Marker
          key={office.code}
          position={office.position}
          icon={pinIcon}
          ref={(marker) => {
            markers.current[office.code] = marker;
          }}
        >
          <Popup>
            <strong>{office.city}</strong>
            <br />
            {office.address[0]}, {office.address[1]}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
