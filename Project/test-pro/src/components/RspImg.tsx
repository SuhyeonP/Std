import React from 'react';

const RspImg = (): JSX.Element => {
  const numberParams = new URLSearchParams(window.location.search.slice(1));
  const numb = Number(numberParams.get('rspCode'));
  const rsp = ['/rock.png', '/paper.png', '/scissor.png'];

  return (
    <div>
      <img src={rsp[numb]} alt={rsp[numb]} />
    </div>
  );
};
export default RspImg;
