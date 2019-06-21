/**
 * @name SongList.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    let uid = -1;
    return this.props.songs.map((song) => {
      uid = uid + 1;
      return (
        // inside map
        <div key={uid} className="item">
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
            </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// mapStateToProps
// basically says get my state from 
// redux store.
// shorten to mapSP?
const stateToProps = (state) => {
  // will show up as props to
  // some component
  console.log(state);
  return {
    songs: state.songs
  };
}
// 
export default connect(stateToProps, {selectSong})(SongList);