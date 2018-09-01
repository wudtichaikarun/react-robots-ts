import * as React from 'react';

type Props = {
  children?: JSX.Element; // เพิ่ม? เพื่อบางทีไม่ต้องการ {props.children}
};

const Scroll = (props: Props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '5px solid black',
        height: '800px'
      }}>
      {props.children}
    </div>
  );
};

export default Scroll;
