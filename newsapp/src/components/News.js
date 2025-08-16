import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps ={
    country: 'us',
    pageSize: 8,
    category: 'general'
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.bool,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8ee24538b384526815a8410e88eccde&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
      let data = await fetch(url);
    //console.log("data ->",data.json());
    let response = await data.json();
    this.setState({
      articles: response.articles,
      totalResults: response.totalResults,
      loading:false
    });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8ee24538b384526815a8410e88eccde&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    //console.log("data ->",data.json());
    let response = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: response.articles,
      loading: false
    });
  };
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8ee24538b384526815a8410e88eccde&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      //console.log("data ->",data.json());
      let response = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: response.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px'}}>Top News Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "no title"}
                  description={
                    element.description ? element.description : "no description"
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
