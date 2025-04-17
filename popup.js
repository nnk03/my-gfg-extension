const site = "geeksforgeeks.org";

document.getElementById("searchButton").addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim();
  if (input) {
    const query = `${input} site:${site}`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    chrome.tabs.create({ url });
  }
});


document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  });
  