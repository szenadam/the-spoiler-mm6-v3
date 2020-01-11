import React from 'react';

function QuestTagGenerator(props) {
  if (/quest [0-9]+$/.test(props.location)) {
    const wholeMatch = props.location.match(/(.*)(quest )([0-9]+)/);
    const firstPart = <>{wholeMatch[1]}</>;
    const anchorTag = '#q_' + wholeMatch[3];
    const questPart = <a href={anchorTag}>{wholeMatch[2] + wholeMatch[3]}</a>;

    return (
      <>{firstPart}{questPart}</>
    );
  }

  return <>{props.location}</>;
}

export default QuestTagGenerator;
