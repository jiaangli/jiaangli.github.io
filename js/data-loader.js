/**
 * Data Loader Module
 * Handles fetching JSON data files
 */

class DataLoader {
  constructor() {
    this.cache = {};
  }

  async loadJSON(path) {
    if (this.cache[path]) {
      return this.cache[path];
    }

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.statusText}`);
      }
      const data = await response.json();
      this.cache[path] = data;
      return data;
    } catch (error) {
      console.error('Error loading JSON:', error);
      throw error;
    }
  }

  async loadProfile() {
    return this.loadJSON('data/profile.json');
  }

  async loadNews() {
    return this.loadJSON('data/news.json');
  }

  async loadPublications() {
    return this.loadJSON('data/publications.json');
  }
}

// Export for use in other modules
window.DataLoader = DataLoader;
