import React from 'react';

function MonsterFactory(props) {
  const { monster } = props;
  switch (monster) {
    case 'Goblin, Goblin Shaman, Goblin King':
      return <a href="#m_hunoi">{monster}</a>;
    case 'Common Rat, Large Rat, Giant Rat':
    case 'Bat, Giant Bat, Vampire Bat':
    case 'Blood Sucker, Brain Sucker, Soul Sucker':
        return <a href="#m_beas1">{monster}</a>;
    default:
      return <></>;
  }
}

function Monsters(props) {
  const { data, efficienfyLevel } = props;

  return (
    <ul>
      {data.map(el => {
        return <li><MonsterFactory monster={el}/></li>;
      })}
      Efficiency level: <b>{efficienfyLevel}</b>
    </ul>
  );
}

function DungeonBottomMap(props) {
  const { monsters, efficienfyLevel } = props
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
              <Monsters data={monsters} efficienfyLevel={efficienfyLevel} />
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
