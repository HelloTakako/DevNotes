import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number | null>();

  return (
    <div className="counter">
      <textarea
        id="string"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCount(e.target.value.length)
        }
      ></textarea>
      <span id="count">{count}</span>

      <style>
        {`
                .counter {
                    margin-bottom: 20px;
               }
                textarea {
                    font-size: 1.6rem;
                    width: 100%;
                    height: 300px;
               }
                #count {
                    font-size: 2rem;
                    color: green;
               }
                #count:before {
                    content: "Character Length: ";
                    color: black;
               }               
            `}
      </style>
    </div>
  );
};

export default Counter;
