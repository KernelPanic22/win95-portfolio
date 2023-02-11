import Webamp from "webamp";
import "./css/Winamp.css";
import React, { useRef, useEffect } from "react";
import { initialTracks } from "./WinanmpConfig";
import Draggable from "react-draggable";


function Winamp() {
    const ref = useRef<HTMLDivElement>(null);
    ref.current!.style.position = "absolute";
    ref.current!.style.zIndex   = "100";
    const webamp = useRef<Webamp | null>(null);
    useEffect(() => {
        if (ref.current) {
            webamp.current = new Webamp({
                initialTracks,
            });
            webamp.current.renderWhenReady(ref.current).then(() => {
                ref.current?.appendChild(document.querySelector("#webamp")!);
            });
            return () => {
                webamp.current?.dispose();
                webamp.current = null;
            };
        }
    }, []);

    return (
        <Draggable handle=".handle">
            <div className="winamp handle"
                ref={ref}
            />
        </Draggable>
    );
}

export default Winamp;