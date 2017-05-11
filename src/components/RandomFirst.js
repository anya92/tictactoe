import React from 'react';

const RandomFirst = (props) => {
  let { playerMark, turn, message, firstTurn, renderMessages } = props;
  return (
    <div>
      {
        playerMark && turn == null
        ? <div className="col-sm-9 choosePlayer text-center">
          <h2>Losowanie...</h2>
            {firstTurn()}      
          </div>
        : message  
          ? <div className="col-sm-9 choosePlayer text-center">
              <h2>{message}</h2>
              {renderMessages()}
            </div>  
          : <div></div>  
      }
    </div>
  );
};

export default RandomFirst;
