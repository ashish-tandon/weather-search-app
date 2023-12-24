import React from "react";
import Globe from './Globe.svg'

export default function Chosen() {
    return (
        <div className="col-6 col-md-2 container Globe">
            <img
                src={Globe}
                alt="circle with arrows at opposite poles"
            />
        </div>
    );
}