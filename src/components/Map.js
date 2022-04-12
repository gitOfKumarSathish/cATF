import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { isEmpty } from "lodash";
import ReactHover, { Trigger, Hover } from "react-hover";
import { Card, CardText, CardBody } from "reactstrap";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const optionsCursorTrueWithMargin = {
  followCursor: false,
};

let mapDetails = [];
export default function Map(props) {
  useEffect(() => {
    if (!isEmpty(props.mapData)) {
      props.mapData.map((x) => {
        if (x.gpsParams.latitude !== "unknown") {
          mapDetails.push(x);
        }
        return false;
      });
      // mapDetails = props.mapData || [];
    }
  }, [props.mapData]);
  function handleZoomChanged() {
    console.log(this.getZoom()); //this refers to Google Map instance
  }
  return (
    <div className="mapArea">
      {mapDetails.length > 0 ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            // remove the key if you want to go Developer Mode of Google Map
            key: "AIzaSyDT0y7nhH7yP4GzV0c-v0Ldtqi7cr6Txb8",
            language: "en",
            region: "US",
          }}
          defaultCenter={{ lat: 12.924, lng: 77.654 }}
          defaultZoom={1}
          distanceToMouse={distanceToMouse}
          onZoomChanged={handleZoomChanged}
        >
          {mapDetails.map((eachDevice) => {
            let gpsParams = eachDevice.gpsParams || [];
            return (
              Object.keys(gpsParams).length > 0 && (
                <div
                  className="circle"
                  lat={gpsParams.latitude || ""}
                  lng={gpsParams.longitude || ""}
                >
                  <span className="circleText">
                    <ReactHover options={optionsCursorTrueWithMargin}>
                      <Trigger type="trigger">
                        <p className="devicePlacement">
                          {" "}
                          <i
                            className="fa fa-mobile"
                            aria-hidden="true"
                            style={{ fontSize: "36px", marginRight: "5px" }}
                          ></i>{" "}
                          {eachDevice.deviceName}
                        </p>
                      </Trigger>
                      <Hover type="hover">
                        <i
                          className="fa fa-caret-up arrowAngle"
                          aria-hidden="true"
                        ></i>
                        <Card className="CardArea">
                          <CardBody>
                            <CardText>
                              {[
                                "deviceId",
                                "deviceName",
                                "deviceType",
                                "version",
                                "ipAddress",
                                "groupId",
                                "connectionStatus",
                              ].map((hoverDetails) => {
                                return (
                                  <p>
                                    <span className="hoverTitle">
                                      {hoverDetails}
                                    </span>
                                    : <span>{eachDevice[hoverDetails]}</span>
                                  </p>
                                );
                              })}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Hover>
                    </ReactHover>
                  </span>
                </div>
              )
            );
          })}
        </GoogleMapReact>
      ) : (
        <p className="center">No Device Found</p>
      )}
    </div>
  );
}
