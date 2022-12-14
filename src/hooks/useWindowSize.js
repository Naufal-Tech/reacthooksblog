import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({

        width: undefined,
        heigth: undefined,
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                heigth: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        // const cleanUp = () => {
        //     console.log('runs if a useEffect dev changes');
        //     window.removeEventListener("resize", handleResize);
        // }

        // return cleanUp;

        return () => window.removeEventListener("resize", handleResize); //refactor clean up

    }, [])

    return windowSize;
} 

export default useWindowSize;