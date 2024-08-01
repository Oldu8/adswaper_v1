document.addEventListener("DOMContentLoaded", function () {
  // Function to replace ads with a default image
  function replaceAds() {
    const adElements = document.querySelectorAll(".ad-class"); // Example selector, replace with actual ad selectors
    adElements.forEach((ad) => {
      ad.innerHTML = `<img src="${chrome.runtime.getURL(
        "public/default.jpg"
      )}" alt="AdSwaper Image" style="width:100%;">`;
    });
  }

  replaceAds();
});
