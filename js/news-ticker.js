$(document).ready(function () {
    const newsTicker = {
        init() {
            this.cacheDOM();
            this.bindEvents();
            this.news();
            this.ticker();
        },
        cacheDOM() {
            let $el = $(".app");
            this.$newsBox = $el.find(".news-box");
            this.$news = $el.find(".news");
            this.$ticker = (".ticker li p");
        },
        bindEvents() {
            $(window).resize(f => {
                this.news();
                this.ticker();
            });
        },
        news() {
            this.tickerWidth = $(this.$ticker).width();
            this.style = {
                position: "absolute",
                bottom: "-10px",
                right: -(this.tickerWidth),
                left: this.tickerWidth,
                fontSize: "1.8em",
                whiteSpace: "nowrap"
            };
            this.blockArr = $(this.$ticker).get().map(e => $(e).html());
            this.itemNum = -1;
        },
        ticker() {
            this.itemNum = this.itemNum < this.blockArr.length - 1 ? this.itemNum + 1 : 0;
            $(this.$news).css(this.style);
            $(this.$news).html(this.blockArr[this.itemNum]);
            this.render();
        },
        render() {
            $(this.$news).animate({
                left: -($(this.$news.width())[0] + $(".news-box").width())
            }, 15000, "linear", this.ticker.bind(this));
        }
    }
    newsTicker.init();
});