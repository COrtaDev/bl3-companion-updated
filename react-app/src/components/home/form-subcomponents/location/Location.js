import React from "react";

const Location = ({ handleLocation }) => {

  const Planet = ({ name, locations }) => {
    return (
      <optgroup label={name}>
        {/* //map locations array here */}
        {locations.map((location, i) => (
          <Locations key={i} location={location} />
        ))}
      </optgroup>
    );
  };

  const Locations = ({ location }) => {
    return <option value={location}>{location}</option>;
  };

  return (
    <div className={"field is-horizontal level-item "}>
      <div className={"field-body"}>
        <div className={"field"}>
          <div className={"control"}>
            <div className={"select"}>
              <select id={"select"} onChange={handleLocation}>
                <option value={""}>Location?</option>
                {/* //Map location Plants here as Optgroups here */}
                {locations.map((location, i) => (
                  <Planet
                    key={i}
                    name={location.name}
                    locations={location.locations}
                  />
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const locations = [
  {
    name: "Pandora",
    locations: [
      "Sandblast Scar",
      "The Slaughter Shaft",
      "Devil’s Razor",
      "The Great Vault",
      "Cathedral of the Twin Gods",
      "Destroyer’s Rift",
      "Konrad’s Hold",
      "The Splinterlands",
      "Guts of Carnivora",
      "Carnivora",
      "The Droughts",
      "Covenant Pass",
      "Ascension Bluff",
    ],
  },
  {
    name: "Promethea",
    locations: [
      "Meridian Outskirts",
      "Meridian Metroplex",
      "Lectra City",
      "Neon Arterial",
      "The Forgotten Basilica",
      "Atlas HQ",
      "Skywell-27",
      "Cistern of Slaughter",
    ],
  },
  {
    name: "Athenas",
    locations: [],
  },
  {
    name: "Eden-6",
    locations: [
      "Jakobs Estate",
      "Ambermire",
      "The Anvil",
      "Voracious Canopy",
      "Floodmoor Basin",
      "The Floating Tomb",
      "Blackbarrel Cellars",
    ],
  },
  {
    name: "Desolations Edge",
    locations: ["Desolation’s Edge", "Tazendeer Ruins", "The Pyre of Stars:"],
  },
  {
    name: "Circles of Slaughter",
    locations: [
      "Cistern of Slaughter",
      "The Slaughter Shaft",
      "Slaughterstar 3000",
    ],
  },
  {
    name: "Proving Ground Trials",
    locations: [
      "Ghostlight Beacon – 'Trial of Cunning'",
      "Gradient of Dawn – 'Trial of Survival'",
      "Precipice Anchor – 'Trial of Discipline'",
      "The Hall Obsidian – 'Trial of Supremacy'",
      "The Skydrowned Pulpit  – 'Trial of Fervor'",
      "Wayward Tether – 'Trial of Instinct'",
    ],
  },
  {
    name: "Moxxi's Heist of the Handsome Jackpot",
    locations: [
      "Grand Opening",
      "Impound Deluxe",
      "The Compactor",
      "Jack's Secret ",
      "VIP Tower Entrance",
    ],
  },
  {
    name: "Guns, Love, and Tentacles",
    locations: [
      "Skittermaw Basin",
      "The Lodge",
      "Cursehaven",
      "Dustbound Archives",
      "The Cankerwood",
      "Negul Neshai",
      "Heart's Desire",
    ],
  },
  {
    name: "Bounty of Blood",
    locations: [
      "Vestige",
      "The Blastplains",
      "Ashfall Peaks",
      "Obsidian Forest",
      "Bloodsun Canyon",
      "Crater's Edge",
      "Crater's Edge - Birth of Ruin",
    ],
  },
  {
    name: "Psycho Krieg and the Fantastic Fustercluck",
    locations: [
      "The Psychoscape",
      "Castle Crimson",
      "Sapphire's Run",
      "Benediction of Pain",
      "Vaulthalla",
    ],
  },
];
export default Location;
