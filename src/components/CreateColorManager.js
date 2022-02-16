import React, {useState} from 'react'

function CreateColorManager() {
    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'magenta',
    ]

    const [originalColor, setOriginalColor] =  useState ('green');
    const [displayedColor,setDisplayedColor] = useState ('');


    const get = () => {
        const getColor = displayedColor ? displayedColor : originalColor;
        
        console.log(getColor);
    }

    const next = () => {
        const currentColor = displayedColor ? displayedColor : originalColor;
        
        const indexColor = colors.indexOf(currentColor);
        const length = colors.length - 1;
        //setDisplayedColor(colors[indexColor + 1]);

         if (length > indexColor) {
            setDisplayedColor(colors[indexColor + 1]);
        } else {
            setDisplayedColor(currentColor);
        }
 
    }

    console.log(displayedColor)

    const previous = () => {
        const currentColor = displayedColor ? displayedColor : originalColor;
        const indexColor = colors.indexOf(currentColor);
        if (0 < indexColor) {
            setDisplayedColor(colors[indexColor - 1]);
        } else {
            setDisplayedColor(currentColor);
        }
        
    }

    const reset = () => {
        setDisplayedColor(originalColor);

    }


  return (
    <div>
        <div 
        style={{
            height:'100px', 
            width:'100px', 
            backgroundColor:`${displayedColor ? displayedColor : originalColor}`
            }}>
                {displayedColor ? displayedColor : originalColor}
        </div>
        <button onClick={get} >GET</button>
        <button onClick={next} >NEXT</button>
        <button onClick={previous} >PREVIOUS</button>
        <button onClick={reset} >RESET</button>
    </div>
  )
}

export default CreateColorManager;