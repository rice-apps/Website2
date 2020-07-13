import { useEffect } from "react";

export function ScrollTop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }); 

    return null;
}






// function ScrollTopBasic() {
//     window.scrollTo(0, 0);
// }

// export function ScrollTop(prevRoute, nextRoute) {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }); 

//     return null;
// }