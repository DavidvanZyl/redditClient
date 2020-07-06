import './awards.component.scss';

import React from 'react';

const Awards = ({ awards }) => {
  const firstThreeAwards = awards.slice(0, 2);
  const numberRemaining = awards.length - 3;
  return (
    <span className="Awards">
      {firstThreeAwards.map((award) => (
        <span className="Awards__award" key={award.id}>
          <img
            className="Awards__award__icon"
            src={award.icon_url}
            alt={`Post award ${award.name}`}
          />
          {award.count}
        </span>
      ))}
      {numberRemaining > 0 && `and ${numberRemaining} others`}
    </span>
  );
};

export default Awards;
