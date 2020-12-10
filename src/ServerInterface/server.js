let api = "https://josephchamul-nearbyplaces-api.herokuapp.com/";

let server = {
  fetchPlaces: () => {
    return fetch(api + "places").then((x) => x.json());
  },

  addReview: (review, name, type) => {
    let data = {
      review: review,
      biz: name,
      type: type,
    };
    fetch(api + "addreview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((x) => x.json())
      .then((y) => console.log(y))
      .catch((e) => console.log(e));
  },

  addPlace: (name, rate, location, description, review, type) => {
    let data = {
      name: name,
      rate: rate,
      location: location,
      description: description,
      review: review,
      type: type,
    };
    fetch(api + "addplace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((x) => x.json())
      .then((y) => console.log(y))
      .catch((e) => console.log(e));
  },

  delete: (type, biz) => {
    let data = {
      type: type,
      biz: biz,
    };
    fetch(api + "delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((x) => x.json())
      .then((y) => console.log(y))
      .catch((e) => console.log(e));
  },
};

export default server;
