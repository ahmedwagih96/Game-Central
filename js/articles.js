const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2d8d67cfdcmsh8b9b76dea59ec67p1cdcd7jsn6ec002e4944c",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
  .then((response) => response.json())
  .then((response) => setArticles(response))
  .catch((err) => console.error(err));

const articlesPosts = document.getElementById("articlesPosts");

function setArticles(articles) {
  articles.length = 8;
  articles.forEach((article) => {
    const { title, thumbnail, short_description } = article;
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
    <div>
      <img src=${thumbnail} alt="thumbnail" />
      <div class="content">
        <h3>${title}</h3>
        <p>
          ${short_description}
        </p>
      </div>
    </div>
    <div class="info">
      <a href="">Read More</a>
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
    `;
    articlesPosts.append(div);
  });
}
