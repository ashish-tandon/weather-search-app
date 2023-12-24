import React from "react";
import Antipodal from './Antipodal.js';
import Chosen from './Chosen.js';
import Globe from './Globe.js';

export default function Middle() {
    return(
        <div className="row d-flex justify-content-center Middle">
            <Antipodal />
            <Globe />
            <Chosen />
        </div>
    )
}