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
      const nameElement = document.querySelector('name');
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
          .map(item => `<li><strong>${item.date}:</strong> ${item.content}</li>`)
          .join('\n');
      }
    } catch (error) {
      console.error('Error rendering news:', error);
    }
  }

  /**
   * Render a single publication entry
   */
  renderPublication(pub) {
    // Render authors
    const authorsHTML = pub.authors.map(author => {
      const authorName = author.highlight ? `<strong>${author.name}</strong>` : author.name;
      const authorLink = author.url ? `<a href="${author.url}">${authorName}</a>` : authorName;
      const equalMark = author.equal ? '*' : '';
      return authorLink + equalMark;
    }).join(',\n');

    // Render links
    const linksHTML = pub.links.length > 0
      ? pub.links
          .filter(link => link.url) // Only show links with URLs
          .map(link => `<a href="${link.url}">${link.name}</a>`)
          .join(' &nbsp/&nbsp\n')
      : '';

    // Render venue with optional note
    const venueHTML = pub.venue_note 
      ? `${pub.venue} <span class="note">${pub.venue_note}</span>`
      : pub.venue;

    return `
      <tr>
        <td class="tdimg" style="width:25%;vertical-align:center">
          <img src="${pub.image}" alt="${pub.title}">
        </td>
        <td class="tdcontent" style="width:75%;vertical-align:center" bgcolor="#FFFFFF">
          <p>
            <a href="${pub.paper_url}">
              <papertitle>${pub.title}</papertitle>
            </a>
            <br>
            ${authorsHTML}
            <br>
            <em>${venueHTML}</em>
            <br>
            ${linksHTML}
          </p>
          <p><span class="note">TL;DR </span>
            ${pub.tldr}
          </p>
        </td>
      </tr>
    `;
  }

  /**
   * Render all publications
   */
  async renderPublications() {
    try {
      const publications = await this.loader.loadPublications();
      const pubContainer = document.getElementById('publications-list');
      
      if (pubContainer) {
        pubContainer.innerHTML = publications
          .map(pub => this.renderPublication(pub))
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
