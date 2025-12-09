/**
 * Storage utility to manage experiment data
 * Replaces PHP session variables using browser's localStorage
 */

const ExperimentStorage = {
  /**
   * Save experiment parameters
   */
  saveExperimentData: function(data) {
    const experimentData = {
      normality_titrate: data.normality_titrate || null,
      volume_titrant: data.volume_titrant || null,
      vadded: data.vadded || null,
      normality_titrant: data.normality_titrant || null,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('experimentData', JSON.stringify(experimentData));
  },

  /**
   * Retrieve all experiment parameters
   */
  getExperimentData: function() {
    const data = localStorage.getItem('experimentData');
    return data ? JSON.parse(data) : null;
  },

  /**
   * Get specific experiment parameter
   */
  getParameter: function(paramName) {
    const data = this.getExperimentData();
    return data ? data[paramName] : null;
  },

  /**
   * Clear all experiment data
   */
  clearExperimentData: function() {
    localStorage.removeItem('experimentData');
  },

  /**
   * Check if experiment data exists
   */
  hasExperimentData: function() {
    return localStorage.getItem('experimentData') !== null;
  }
};
