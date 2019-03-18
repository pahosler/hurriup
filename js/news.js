$(document).ready(function() {
var block_arr = $(".ticker li")
  .get()
  .map(e => e.innerHTML);
var item_num = 0;
news_style = {
  position: "absolute",
  top: "-5px",
  left: `${$(".ticker li p").width()}px`,
  right: `${-($(".ticker li p").width())}px`,
  fontSize: "1.8em",
  whiteSpace: "nowrap"
};
$(".news").html(block_arr[item_num]);
var news = $(".news");
news.css(news_style);
var ticker_width = -($(".ticker li p").width());
console.log(ticker_width)

const ticker = () => {
  item_num = item_num < block_arr.length - 1 ? item_num + 1 : 0;
  $(".news").html(block_arr[item_num]);
  news = $(".news");
  news.css(news_style);
  displayNews();
};
const displayNews = () => {
  news.animate({ left: `${ticker_width}` }, 15000, "linear", ticker);
};
displayNews(news);
});
