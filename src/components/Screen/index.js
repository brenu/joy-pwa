import React from "react";
import "./styles.css";

class Screen extends React.Component {
  render() {
    var pc = null;

    function negotiate() {
      pc.addTransceiver("video", { direction: "recvonly" });
      pc.addTransceiver("audio", { direction: "recvonly" });
      return pc
        .createOffer()
        .then(function (offer) {
          return pc.setLocalDescription(offer);
        })
        .then(function () {
          // wait for ICE gathering to complete
          return new Promise(function (resolve) {
            if (pc.iceGatheringState === "complete") {
              resolve();
            } else {
              function checkState() {
                if (pc.iceGatheringState === "complete") {
                  pc.removeEventListener("icegatheringstatechange", checkState);
                  resolve();
                }
              }
              pc.addEventListener("icegatheringstatechange", checkState);
            }
          });
        })
        .then(function () {
          var offer = pc.localDescription;
          return fetch("/offer", {
            body: JSON.stringify({
              sdp: offer.sdp,
              type: offer.type,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (answer) {
          return pc.setRemoteDescription(answer);
        })
        .catch(function (e) {
          alert(e);
        });
    }

    function start() {
      var config = {
        sdpSemantics: "unified-plan",
      };

      // MODIFICAR PRA SEMPRE TRIGAR
      config.iceServers = [{ urls: ["stun:stun.l.google.com:19302"] }];

      pc = new RTCPeerConnection(config);

      console.log("start");

      // connect audio / video
      pc.addEventListener("track", function (evt) {
        document.getElementById("video").srcObject = evt.streams[0];
        // TIRAR POIS NÃO VOU STREMAR AUDIO
        //  else {
        //     document.getElementById('audio').srcObject = evt.streams[0];
        // }
      });
    }

    function stop() {
      console.log("stop");
      // close peer connection
      setTimeout(function () {
        pc.close();
      }, 500);
    }
    return (
      <div>
        <video className="screen" id="video" autoPlay="true"></video>
        <button id="start" onClick="start">
          Start
        </button>
        <button id="stop" onClick="stop">
          Stop
        </button>
      </div>
    );
  }
}

export default Screen;
