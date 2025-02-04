import React, { useState, useEffect, useRef, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import { Location } from './types';
import './styles/App.css';
import { useDispatch } from 'react-redux';
import { close } from './store/slices/sideBarSlice';
import { trigger } from './store/slices/mapSlice';

const MapComponent = React.lazy(() => import('./components/Map'));

const App: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [currLocation, setCurrLocation] = useState<Location>(locations[0]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  // Fetch locations from the static JSON file
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('/locations.json');
      const data = await response.json();
      setLocations(data);
      setFilteredLocations(data);
    };

    fetchLocations();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredLocations(filtered);
  };

  const handleLocationSelect = (lat: number, lon: number, location: Location) => {
    console.log('Zoom to location:', lat, lon);
    setCurrLocation(location);
    dispatch(close());
    setFilteredLocations(locations);

    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    dispatch(trigger());
  };

  return (
    <div className="app">
      <Sidebar
        locations={filteredLocations}
        searchInputRef={searchInputRef}
        onLocationSelect={handleLocationSelect}
        handleSearch={handleSearch}
      />
      <Suspense fallback={<Loading />}>
        {' '}
        <MapComponent locations={filteredLocations} currLocation={currLocation} />
      </Suspense>
    </div>
  );
};

export default React.memo(App);
