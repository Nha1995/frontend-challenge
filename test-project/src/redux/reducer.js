const initialState = {
  favoriteCats: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD CAT IN FAVORITES": {
      return {
        favoriteCats: [...state.favoriteCats, action.payload.cat],
      };
    }
    case "DELETE CAT": {
      const newFavCats = state.favoriteCats.filter((favCat) => {
        if (favCat.id !== action.payload.cat.id) {
          return favCat;
        }
      });
      return {
        favoriteCats: newFavCats,
      };
    }
    default: {
      return state;
    }
  }
}
export default reducer;
