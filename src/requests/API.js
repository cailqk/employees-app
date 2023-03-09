const baseUrl = "http://localhost:5010/";

async function get(url) {
  return fetch(baseUrl + url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  return fetch(baseUrl + url, options)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

const post = request.bind({}, "POST");

export { get, post };
