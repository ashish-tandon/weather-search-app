import React from "react";

export default function Top() {
    return (
        <div className="Top">
            <div className="row d-flex align-items-baseline">
                <div className="col-12 col-md-6 antipode">
                    <h1>ANTIPODE WEATHER</h1>
                    <h4>Try searching for:</h4>
                    <h4>Taipei, Madrid, Perth, or Honolulu.</h4>
                </div>
                <div className="col-12 col-md-6  yourCity">
                    <h4>Find the weather in...</h4>
                    <form>
                        <div>
                            <input type="text" value="Placeholder" />
                            <input type="button"/>
                        </div>
                        <div>
                            <input type="text" value="Your location" disabled />
                            <input type="button"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }