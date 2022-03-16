import React, { useState } from "react";
import "../../assets/styles/Carousel.css"

import { BiCaretLeft, BiCaretRight } from "react-icons/bi";




const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = (useState(0))

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 200}px)` }}>
                {/* {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })} */}
                {children}
            </div>
            <div className="indicators">
                <button
                    onClick={() => { updateIndex(activeIndex - 1) }}>
                    <BiCaretLeft/>
                </button>
                {/* {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            onClick={() => { updateIndex(index); }}
                            className={`${index === activeIndex ? "active" : ""}`}
                        >
                            <BiMovie />
                        </button>
                    )
                })} */}
                <button
                    onClick={() => { updateIndex(activeIndex + 1) }}>
                    <BiCaretRight/>
                </button>
            </div>

        </div>
    )
}

export default Carousel;






// import React, { useState } from "react";


// export const CarouselItem = ({ children, width }) => {
//     return (
//         <div className="carousel-item" style={{ width: width }}>
//             {children}
//         </div>
//     );
// }
// const Carousel = ({ children }) => {
//     const [activeIndex, setActiveIndex] = (useState(0))

//     const updateIndex = (newIndex) => {
//         if (newIndex < 0) {
//             newIndex = React.Children.count(children) - 1;
//         } else if (newIndex >= React.Children.count(children)) {
//             newIndex = 0
//         }
//         setActiveIndex(newIndex)
//     }

//     return (
//         <div className="carousel">

//             <div className="inner" style={{ transform: `translateX(-${activeIndex * 25}%)` }}>
//                 {React.Children.map(children, (child, index) => {
//                     return React.cloneElement(child, { width: "25%" });
//                 })}
//             </div>

//             <div className="indicators">
//                 <button
//                     onClick={() => { updateIndex(activeIndex - 1) }}>
//                     prev
//                 </button>
//                 {React.Children.map(children, (child, index) => {
//                     return (
//                         <button
//                             onClick={() => { updateIndex(index); }}
//                             className={`${index === activeIndex ? "active" : ""}`}
//                         >
//                             o
//                         </button>
//                     )
//                 })}
//                 <button
//                     onClick={() => { updateIndex(activeIndex + 1) }}>
//                     next
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default Carousel;



