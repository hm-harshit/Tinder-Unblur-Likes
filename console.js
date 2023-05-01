async function unblur() {
    const teasers = await fetch("https://api.gotinder.com/v2/fast-match/teasers", { "headers": { "X-Auth-Token": localStorage.getItem('TinderWeb/APIToken'), platform: 'android' }}).then(res => res.json()).then(res => res.data.results);
    const teaserEls = document.querySelectorAll('.Expand.enterAnimationContainer > div:nth-child(1)');
    
    for (let i = 0; i < teaserEls.length; ++i) {
      const teaser = teasers[i];
      const teaserEl = teaserEls[i];
      
      const teaserImage = `https://preview.gotinder.com/${teaser.user._id}/original_${teaser.user.photos[0].id}.jpeg`;
        
        console.log(teaser.user.photos);
      
      teaserEl.style.backgroundImage = `url(${teaserImage})`;
    }
  }
  unblur();