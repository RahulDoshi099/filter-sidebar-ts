import React, { useState } from "react";
import "./GreyhoundList.scss";
import { Datarray } from "../pages/TableData";

interface Greyhound {
  tokenId: number;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: {
      trait_type: string;
      value: string;
    }[];
  };
}

const GreyhoundList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
  };

  const filterData = (): Greyhound[] => {
    return Datarray.filter((item: Greyhound) => {
      return (
        item.metadata.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterValue === "" || item.metadata.attributes.some((attr) => attr.value === filterValue))
      );
    });
  };

  const filteredData: Greyhound[] = filterData();

  return (
    <div className="greyhound-list">
      <div className="greyhound-list__search">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterValue} onChange={handleFilterChange}>
          <option value="">Filter by attribute</option>
          <option value="G1 Black Top">Bloodline: G1 Black Top</option>
          <option value="G2 Zoom Top">Bloodline: G2 Zoom Top</option>
          <option value="G3 Temlee">Bloodline: G3 Temlee</option>
          <option value="G4 Half Your Luck">Bloodline: G4 Half Your Luck</option>
          <option value="Dog">Gender: Dog</option>
          <option value="Bitch">Gender: Bitch</option>
          <option value="Space">Skin Pattern: Space</option>
          <option value="Copper">Coat Colour4: Copper</option>
        </select>
        <button className="greyhound-list__filter">Filter</button>
      </div>
      <div className="greyhound-list__results">
        {filteredData.map((item: Greyhound) => (
          <div key={item.tokenId} className="greyhound-list__item">
            <img src={item.metadata.image} alt={item.metadata.name} />
            <h2>{item.metadata.name}</h2>
            <p>{item.metadata.description}</p>
            <ul>
              {item.metadata.attributes.map((attr, index) => (
                <li key={index}>
                  {attr.trait_type}: {attr.value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreyhoundList;