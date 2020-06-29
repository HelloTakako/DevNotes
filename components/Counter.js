const Counter = () => {
    function count(e){
        e.preventDefault();
        const count = document.getElementById('count');
        const string = document.getElementById('string');

        count.innerText = string.value.length;
        ;
    }
    return(
        <div className='counter'>
            <textarea id="string" onChange={count}></textarea>
            <span id="count">0</span>

            <style jsx>{`
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
        )
    };

export default Counter;