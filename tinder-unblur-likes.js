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
      if (teaser.user.recently_active) 
          document.querySelector('[aria-labelledby="02d620a8e38797fb"] > title').textContent = `Likes you - Recently active`
    else document.querySelector('[aria-labelledby="02d620a8e38797fb"] > title').textContent = `Likes you - Not Recently active`
      
    const teaserEl = teaserEls[index];
    const teaserImage = `https://preview.gotinder.com/${teaser.user._id}/original_${teaser.user.photos[0].id}.jpeg`;
    teaserEl.style.backgroundImage = `url(${teaserImage})`;
  });
}

unblur();
