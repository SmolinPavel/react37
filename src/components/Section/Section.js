import { Fragment } from 'react';

const DATA = [
  { one: 1, two: 2 },
  { one: 11, two: 12 },
  { one: 111, two: 112 },
];

export const Section = () => {
  return (
    <div>
      {DATA.map((item, idx) => (
        <Fragment key={idx}>
          <section>Section {item.one}</section>
          <section>Section {item.two}</section>
        </Fragment>
      ))}
    </div>
  );
};
