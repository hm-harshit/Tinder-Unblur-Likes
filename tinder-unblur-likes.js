async function unblur() {
  const teasers = await fetch("https://api.gotinder.com/v2/fast-match/teasers", {
    headers: {
      "X-Auth-Token": localStorage.getItem("TinderWeb/APIToken"),
      platform: "android",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data.results);

  const teaserEls = document.querySelectorAll(
'[class="Expand Pos(r) Bdrs(4px) Ov(h)"] > div'
  )

  teasers.forEach((teaser, index) => {
    const teaserEl = teaserEls[index];
    const teaserImage = `https://preview.gotinder.com/${teaser.user._id}/original_${teaser.user.photos[0].id}.jpeg`;
    teaserEl.style.backgroundImage = `url(${teaserImage})`;
  });
}
unblur()
