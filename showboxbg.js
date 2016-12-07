(function showBox() {
    var images = document.querySelectorAll(".showbox"),
        showBoxWrap, showBoxLoading, showBoxImage, buttonClose, buttonNext, buttonPrev;
        
    if (images[0]) {
        showBoxWrap = document.createElement("div");
        showBoxWrap.id = "showBox";

        showBoxLoading = document.createElement("div");
        showBoxLoading.id = "showBoxLoading";
        showBoxWrap.appendChild(showBoxLoading);

        showBoxImage = document.createElement("div");
        showBoxImage.id = "showBoxImage";
        showBoxWrap.appendChild(showBoxImage);

        buttonClose = document.createElement("span");
        buttonClose.id = "close";
        buttonClose.onclick = function () {showBoxWrap.removeAttribute("class")};
        showBoxWrap.appendChild(buttonClose);

        buttonNext = document.createElement("span");
        buttonNext.id = "next";
        showBoxWrap.appendChild(buttonNext);

        buttonPrev = document.createElement("span");
        buttonPrev.id = "prev";
        showBoxWrap.appendChild(buttonPrev);

        for (var i = 0; i < images.length; i++) {
            (function (i) {
                images[i].onclick = function () {
                    showImage(i);
                };
            })(i);
        }

        function showImage(i) {
            showBoxImage.style.backgroundImage = "url('" + images[i].src.replace("small", "big") + "')";
            showBoxWrap.className = "visible";
            buttonNext.onclick = function () {showImage(i < images.length - 1 ? i + 1 : 0)};
            buttonPrev.onclick = function () {showImage(i > 0 ? i - 1 : images.length - 1)};
        }

        document.body.appendChild(showBoxWrap);
    }
})();
