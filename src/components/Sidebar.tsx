import React from 'react';
import { Location } from '../types';
import Search from './Search';
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../store/slices/sideBarSlice';

interface SidebarProps {
  locations: Location[];
  onLocationSelect: (lat: number, lon: number, location: Location) => void;
  handleSearch: (query: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

const Sidebar: React.FC<SidebarProps> = ({
  locations,
  onLocationSelect,
  handleSearch,
  searchInputRef,
}) => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector((state: any) => state.sidebar.isActive);

  const openSideBar = () => {
    dispatch(open());
  };

  const closeSideBar = () => {
    dispatch(close());
  };

  return (
    <>
      <button className="toggle-button" onClick={openSideBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="transparent" onClick={closeSideBar}>
            <svg
              className="close-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <Search onSearch={handleSearch} searchInputRef={searchInputRef} />
        </div>

        <h2 className="sidebar-title text-xl m-4">Locations</h2>
        <ul className="location-list">
          {locations.map((location) => (
            <li
              key={location.id}
              className="location-item hover:bg-slate-300"
              onClick={() => onLocationSelect(location.lat, location.lon, location)}>
              <div className="city-info">
                <img src={location.mainImg} alt="" className="p-0.5" />
                <h4 className="block font-bold font-serif">{location.name}</h4>
                <p className="block">{location.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
