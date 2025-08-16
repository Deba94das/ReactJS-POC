import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
          <div className="card">
            <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/108185309-1755092580924-gettyimages-2229791646-anotherday100697691_pz8s3lfu.jpeg?v=1755092615&w=1920&h=1080":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
