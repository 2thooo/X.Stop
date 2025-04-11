document.addEventListener('DOMContentLoaded', () => {
  const feeds = document.querySelectorAll('.instagram-feed');
  feeds.forEach(feed => {
    const account = feed.getAttribute('data-account');
    // Placeholder for Instagram feed integration
    feed.innerHTML = `<p>Instagram feed for @${account} (Integration placeholder)</p>`;
  });
});