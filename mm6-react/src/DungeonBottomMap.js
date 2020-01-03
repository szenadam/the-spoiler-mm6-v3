import React from 'react';

function DungeonBottomMap(props) {
  return (
    <section id={props.id}>
      <table className="w-1240 dungeon">
        <tbody>
        <tr>
          <td className="w-300">
            <h3>{props.name}</h3>
          </td>
          <td className="w-503">
            <h3>Locations</h3>
            {props.locations}
          </td>
          <td className="w-437">
            <h3>Monsters</h3>
            {props.monsters}
          </td>
        </tr>
        <tr>
          <td colSpan="3" className="img-container">
            <img height="300" width="960" src={props.imgSrc} alt={props.imgAlt} />
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  );
}

export default DungeonBottomMap;