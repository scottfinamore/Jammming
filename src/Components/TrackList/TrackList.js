import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
import PausePlayIcon from "../PausePlayIcon/PausePlayIcon";

const elements = [];

class TrackList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElement: null,
      allElements: elements,
    };
    this.toggleIndex = this.toggleIndex.bind(this);
  }

  toggleIndex(index) {
    let audio = document.getElementById(index);
    let allAudios = document.querySelectorAll("audio");
    audio.volume = 0.1;

    if (this.state.activeElement === index) {
      this.setState({ activeElement: null });
      audio.pause();
    } else {
      this.setState({ activeElement: index });
      allAudios.forEach(function (audio) {
        audio.pause();
      });
      audio.play();
    }
  }

  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track, index) => {
          elements.push(index);
          return (
            <div key={index}>
              <PausePlayIcon
                allElements={this.state.allElements}
                activeElement={this.state.activeElement}
                toggleIndex={this.toggleIndex}
                preview={track.preview}
                index={index}
              />
              <Track
                track={track}
                key={track.id}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TrackList;

// import React from "react";

// import "./TrackList.css";

// import Track from "../Track/Track";

// class TrackList extends React.Component {
//   render() {
//     return (
//       <div className="TrackList">
//         {this.props.tracks &&
//           this.props.tracks.map((track) => {
//             return (
//               <Track
//                 track={track}
//                 key={track.id}
//                 onAdd={this.props.onAdd}
//                 onRemove={this.props.onRemove}
//                 isRemoval={this.props.isRemoval}
//               />
//             );
//           })}
//       </div>
//     );
//   }
// }

// export default TrackList;
// _________________________________;

// class TrackList extends React.Component {
//   isInPlaylist(track) {
//     let tracksIn = this.props.tracksInPlaylist;
//     // check if tracksIn is not "undefined"
//     if (!tracksIn) {
//       return; // if it is, break the code below
//     }
//     // check if the track passed in argument  is in the playlist or not and return a boolean
//     return tracksIn.find((savedTrack) => savedTrack.id === track.id)
//       ? true
//       : false;
//   }

//   render() {
//     return (
//       <div className="TrackList">
//         {this.props.tracks.map((track) => {
//           if (!this.isInPlaylist(track)) {
//             // display each track only if it is not in the playlist
//             return (
//               <Track
//                 key={track.id}
//                 track={track}
//                 onAdd={this.props.onAdd}
//                 onRemove={this.props.onRemove}
//                 isRemoval={this.props.isRemoval}
//               />
//             );
//           } else {
//             // if it is in the playlist, display nothing
//             return null;
//           }
//         })}
//       </div>
//     );
//   }
// }

// export default TrackList;
