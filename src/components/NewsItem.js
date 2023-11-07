import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,author, date,source,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
            <div   style={{
              display:'flex',
              justifyContent:'flex-end',
              position:'absolute',
              right:'0'
            }}>
              <span className="badge rounded pill bg-danger">{source}</span>

            </div>
          <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/Yh_e9kJLXD8ewwtKGQzmFKUkEKw=/0x0:3840x2160/1200x628/filters:focal(1920x1080:1921x1081)/cdn.vox-cdn.com/uploads/chorus_asset/file/24884348/Starfield_02_GravJump.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text"> {description} </p>
            <p className="card-text"><small className="text-muted"> By {!author? "Unknown": author} on {new Date (date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-danger">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
