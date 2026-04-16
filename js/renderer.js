/**
 * Content Renderer Module
 * Handles rendering data to the DOM
 */

class ContentRenderer {
  constructor() {
    this.loader = new DataLoader();
  }

  /**
   * Render the profile section
   */
  async renderProfile() {
    try {
      const profile = await this.loader.loadProfile();

      // Update name
      const nameElement = document.querySelector('.profile-name');
      if (nameElement) {
        nameElement.textContent = profile.name;
      }

      // Update bio
      const bioContainer = document.getElementById('bio-content');
      if (bioContainer) {
        bioContainer.innerHTML = profile.bio.map(paragraph => `<p>${paragraph}</p>`).join('');
      }

      // Update links
      const linksContainer = document.getElementById('profile-links');
      if (linksContainer) {
        linksContainer.innerHTML = profile.links
          .map(link => `<a href="${link.url}">${link.name}</a>`)
          .join(' &nbsp/&nbsp\n');
      }

      // Update profile image
      const profileImg = document.getElementById('profile-image');
      if (profileImg) {
        profileImg.src = profile.profileImage;
        profileImg.alt = `${profile.name} profile photo`;
      }
    } catch (error) {
      console.error('Error rendering profile:', error);
    }
  }

  /**
   * Render the news section
   */
  async renderNews() {
    try {
      const newsItems = await this.loader.loadNews();
      const newsContainer = document.getElementById('news-list');

      if (newsContainer) {
        newsContainer.innerHTML = newsItems
          .map(item => `<li><span class="news-date">${item.date}</span><span class="news-text">${item.content}</span></li>`)
          .join('\n');
      }
    } catch (error) {
      console.error('Error rendering news:', error);
    }
  }

  /**
   * Render a single publication entry
   */
  renderPublication(pub, authorsRegistry) {
    // Render authors — each entry is a string like "Name" or "Name*"
    const authorsHTML = pub.authors.map(nameStr => {
      const equal = nameStr.endsWith('*');
      const name = equal ? nameStr.slice(0, -1) : nameStr;
      const info = authorsRegistry[name] || {};
      const displayName = info.highlight ? `<strong>${name}</strong>` : name;
      const linked = info.url ? `<a href="${info.url}">${displayName}</a>` : displayName;
      return linked + (equal ? '*' : '');
    }).join(', ');

    // Render links
    const linksHTML = pub.links.length > 0
      ? pub.links
        .filter(link => link.url)
        .map(link => `<a href="${link.url}">${link.name}</a>`)
        .join(' &nbsp/&nbsp\n')
      : '';

    // Render venue with optional note
    const venueHTML = pub.venue_note
      ? `${pub.venue} <span class="note" style="display:inline;margin:0;">${pub.venue_note}</span>`
      : pub.venue;

    return `
      <div class="pub-entry">
        <div class="pub-img">
          <img src="${pub.image}" alt="${pub.title}">
        </div>
        <div class="pub-content">
          <a class="pub-title" href="${pub.paper_url}">${pub.title}</a>
          <div class="pub-authors">${authorsHTML}</div>
          <div class="pub-venue">${venueHTML}</div>
          <div class="pub-links">${linksHTML}</div>
          <div class="pub-tldr"><span class="note">TL;DR </span>${pub.tldr}</div>
        </div>
      </div>
    `;
  }

  /**
   * Render all publications
   */
  async renderPublications() {
    try {
      const [publications, authorsRegistry] = await Promise.all([
        this.loader.loadPublications(),
        this.loader.loadAuthors()
      ]);
      const pubContainer = document.getElementById('publications-list');

      if (pubContainer) {
        pubContainer.innerHTML = publications
          .map(pub => this.renderPublication(pub, authorsRegistry))
          .join('\n');
      }
    } catch (error) {
      console.error('Error rendering publications:', error);
    }
  }

  /**
   * Initialize and render all content
   */
  async renderAll() {
    await Promise.all([
      this.renderProfile(),
      this.renderNews(),
      this.renderPublications()
    ]);
    console.log('All content rendered successfully');
  }
}

// Export for use in HTML
window.ContentRenderer = ContentRenderer;
