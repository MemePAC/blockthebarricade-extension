const watermelon = document.getElementById("watermelon");

chrome.storage.sync.get("blocking", (data) => {
  watermelon.checked = data.blocking;
});

watermelon.onclick = async () => {
  const data = await chrome.storage.sync.get("blocking");
  chrome.storage.sync.set({ blocking: !data.blocking });
};
