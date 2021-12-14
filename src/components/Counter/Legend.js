import { useContext } from 'react';

import { TitleContext } from 'contexts/Title';

export const Legend = () => {
  const { title } = useContext(TitleContext);

  return <div>Legend: {title}</div>;
};
