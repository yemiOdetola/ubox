import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Config from '../../utils/config.json';
import '../../styles/compontents/video/card.scss';

// images
// import Altavatar from '../../'

export default function Card(props) {
  const { data } = props;
  const minutes = Math.floor(data.duration / 60);
  const seconds = Math.floor(data.duration - (minutes * 60))
  return (
    <Link to={`/video/${data._id}`} className="video-card">
      <div className="main">
        <img src={`${Config.base}/${data.thumbnail}`} alt={data.title} className="thumbnail" />
        <span className="duration">{minutes}:{seconds}</span>
      </div>
      <div className="metadata">
        <div className="avatar">
          {data.writer && data.writer.image
            ? <img src={`${Config.base}/${data.writer.image}`} alt="avatar" className="avatar" />
            : <img src={require('../../assets/images/avatar.png').default} alt="avatar" className="avatar" />
          }
        </div>
        <div className="meta">
          <h3 className="title">{data.title}</h3>
          <h3 className="creator">{data.writer && data.writer.name ? data.writer.name : 'Anonymous black'}</h3>
          <div className="views-date">
            <span>{data.views} views</span>
            <span>-</span>
            <span>{moment(data.createdAt).format('MMM Do YYYY')}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
