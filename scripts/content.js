chrome.storage.sync.get("blocking", (data) => {
  if (!data.blocking) {
    return;
  }

  const site = window.location.toString();

  const blocklist = [
    // companies
    "https://www.mcdonalds.com",
    "https://www.papajohns.com",
    "https://www.dominos.com",
    "https://www.bk.com",
    "https://www.wix.com",
    "https://www.pizzahut.com",

    // public figures
    "https://www.instagram.com/taylorswift",
    "https://www.taylorswift.com",
    "https://twitter.com/taylorswift13",

    "https://www.amyschumer.com",
    "https://www.instagram.com/amyschumer",
    "https://twitter.com/amyschumer",

    "https://www.instagram.com/noahschnapp",
    "https://twitter.com/noah_schnapp",
    "https://www.tiktok.com/@noahschnapp",

    "https://www.instagram.com/kimkardashian",
    "https://skknbykim.com",
    "https://skims.com",

    "https://www.charlieputh.com",
    "https://www.instagram.com/charlieputh",
    "https://twitter.com/charlieputh",

    "https://www.instagram.com/sarahkatesilverman",
    "https://twitter.com/SarahKSilverman",

    "https://www.instagram.com/missmayim",
    "https://twitter.com/missmayim",

    "https://twitter.com/Oprah",
    "https://www.instagram.com/Oprah",

    "https://twitter.com/elonmusk",
    "https://www.instagram.com/elonmusk__.official",

    "https://www.instagram.com/tchalamet",
    "https://twitter.com/RealChalamet",

    "https://www.instagram.com/trevornoah",
    "https://twitter.com/Trevornoah",
  ];

  if (blocklist.find((item) => site.includes(item))) {
    window.location.href = "https://www.gofundme.com/s?q=palestine";
    return;
  }

  const links = document.getElementsByTagName("a");
  for (let link of links) {
    if (
      link.textContent.toLowerCase().includes("drake") ||
      link.textContent.toLowerCase().includes("kendrick")
    ) {
      link.href = "https://www.youtube.com/watch?v=fgDQyFeBBIo";
      continue;
    }

    if (
      link.textContent.toLowerCase().includes("minouche") ||
      link.textContent.toLowerCase().includes("shafik")
    ) {
      link.href = "https://www.instagram.com/presidentminouche/";
      continue;
    }
  }
});
