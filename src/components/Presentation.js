import React from "react"
import triangle from "../images/triangle.svg"
import circle from "../images/circle.svg"
import diamond from "../images/diamond.svg"
import square from "../images/square.svg"

const Presentation = () => {
  return (
    <hp-content>
      <hp-presentation>
        <hp-slide className="active">
          <hp-title>Which shape</hp-title>
          <hp-chooser>
            <img src={triangle} />
            <img src={circle} />
            <img src={diamond} />
            <img src={square} />
          </hp-chooser>
          <hp-title>doesn't belong?</hp-title>
        </hp-slide>
        <hp-slide>
          <hp-title>Which shape</hp-title>
          <hp-chooser>
            <img src={triangle} />
            <img src={circle} />
            <img src={diamond} />
            <img src={square} />
          </hp-chooser>
          <hp-title>doesn't belong?</hp-title>
        </hp-slide>
      </hp-presentation>
    </hp-content>
  )
}
