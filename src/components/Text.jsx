// import React, { useState } from 'react'
// import Draggable from 'react-draggable'
// import './Text.css'

// const Text = ({ initialEditMode = false }) => {
//     const [editMode, setEditMode] = useState(initialEditMode)
//     const [val, setVal] = useState('edit ')

//     const isTouchDevice = () => {
//         return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//     };

//     return (
//         <Draggable>
//             {
//                 editMode
//                     ? <input
//                         className="draggable-input"
//                         onBlur={() => setEditMode(false)}
//                         value={val}
//                         autoFocus
//                         onChange={e => setVal(e.target.value)}
//                     />
//                     : <h1
//                         className="draggable-text"
//                         onDoubleClick={() => setEditMode(true)}
//                         onClick={() => {
//                             if (isTouchDevice()) setEditMode(true);
//                         }}
//                     >
//                         {val}
//                     </h1>
//             }
//         </Draggable>
//     )
// }

// export default Text
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Text.css';

const Text = ({ initialEditMode = false }) => {
    const [editMode, setEditMode] = useState(initialEditMode);
    const [val, setVal] = useState('edit ');

    const isTouchDevice = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    return (
        <Draggable>
            <div className="draggable-wrapper">
                {editMode ? (
                    <input
                        className="draggable-input"
                        onBlur={() => setEditMode(false)}
                        value={val}
                        autoFocus
                        onChange={e => setVal(e.target.value)}
                    />
                ) : (
                    <h1
                        className="draggable-text"
                        onDoubleClick={() => setEditMode(true)}
                        onClick={() => {
                            if (isTouchDevice()) setEditMode(true);
                        }}
                    >
                        {val}
                    </h1>
                )}
            </div>
        </Draggable>
    );
};

export default Text;
