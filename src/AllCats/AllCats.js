import React from "react";
import "./AllCats.css";
import store from "../redux/store";
import { connect } from "react-redux";
import CatImage from "../CatImage/CatImage";

let pageNumber = 0;
const key = "api_key=23e83fc7-a78b-4306-b286-3496593e575d";

class Cats extends React.Component {
  state = {
    cats: [],
  };

  infiniteScroll = () => {
    // End of the document reached?
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.loadMoreCatsHandler();
    }
  };

  getCatsFunction = () => {
    try {
      const getCats = async () => {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=15&page=${pageNumber}&order=Desc&${key}`
        );
        const results = await response.json();
        this.setState({ cats: [...this.state.cats, ...results] });
      };
      getCats();
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    pageNumber = 0;
    window.addEventListener("scroll", this.infiniteScroll);
    this.getCatsFunction();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  isFavorite = (cat) => {
    const isCat = this.props.favoriteCats.find(
      (favCat) => favCat.id === cat.id
    );
    if (isCat === undefined) {
      store.dispatch({
        type: "ADD CAT IN FAVORITES",
        payload: {
          cat: cat,
        },
      });
    } else {
      store.dispatch({
        type: "DELETE CAT",
        payload: {
          cat: cat,
        },
      });
    }
  };

  checkFavoriteHandler = (cat) => {
    const isCat = this.props.favoriteCats.find(
      (favCat) => favCat.id === cat.id
    );
    if (isCat !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  loadMoreCatsHandler = () => {
    pageNumber++;
    this.getCatsFunction();
  };

  render() {
    return (
      <>
        <div className="cats">
          {this.state.cats.map((cat) => {
            return (
              <div className="cat-block">
                <CatImage url={cat.url} />

                {this.checkFavoriteHandler(cat) && (
                  <div className="cats__favorite">
                    <svg
                      width="40"
                      height="37"
                      viewBox="0 0 40 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
                        fill="#F24E1E"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className="cats__heart"
                  onClick={() => this.isFavorite(cat)}
                >
                  {this.checkFavoriteHandler(cat) ? (
                    <svg
                      width="40"
                      height="37"
                      viewBox="0 0 40 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
                        fill="#F24E1E"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="40"
                      height="37"
                      viewBox="0 0 40 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
                        fill="#F24E1E"
                      />
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="cats__load-more-cats-link">
          <p>... загружаем еще котиков ...</p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteCats: state.favoriteCats,
  };
};

const functionFromConnect = connect(mapStateToProps);
const updateDataSets = functionFromConnect(Cats);

export default updateDataSets;
