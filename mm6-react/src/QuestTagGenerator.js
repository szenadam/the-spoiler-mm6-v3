import React from 'react';

function QuestTagAtTheEnd(props) {
  const { location } = props;
  const wholeMatch = location.match(/^(.*)(quest )([0-9]+$)/);
  const anchorTagValue = `#q_${wholeMatch[3]}`;
  const beforePart = <>{wholeMatch[1]}</>;
  const questPart = <a href={anchorTagValue}>{`${wholeMatch[2]}${wholeMatch[3]}`}</a>;
  return (<>{beforePart}{questPart}</>);
}

function QuestTagAtTheBeginning(props) {
  const { location } = props;
  const wholeMatch = location.match(/^(quest )([0-9]+)(.*)$/);
  const anchorTagValue = `#q_${wholeMatch[2]}`;
  const questPart = <a href={anchorTagValue}>{`${wholeMatch[1]}${wholeMatch[2]}`}</a>;
  const afterPart = <>{wholeMatch[3]}</>;
  return (<>{questPart}{afterPart}</>);
}

function QuestTagGenerator(props) {
  const { location } = props;
  const isQuestionTagAtTheEnd = /quest [0-9]+$/.test(location);
  const isQuestionTagAtTheBeginning = /^quest [0-9]+/.test(location);

  if (isQuestionTagAtTheEnd) {
    return <QuestTagAtTheEnd location={location} />;
  } else if (isQuestionTagAtTheBeginning) {
    return <QuestTagAtTheBeginning location={location} />;
  }

  return <>{location}</>;
}

export default QuestTagGenerator;
