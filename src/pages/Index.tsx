/**
 * =============================================================================
 * INDEX PAGE COMPONENT
 * =============================================================================
 * 
 * The main entry point / home page of the portfolio.
 * Renders the PosterHome component which contains the hero section
 * and radial navigation.
 * 
 * Route: /
 * 
 * =============================================================================
 */

import PosterHome from '@/components/PosterHome';

// -----------------------------------------------------------------------------
// INDEX PAGE COMPONENT
// -----------------------------------------------------------------------------

const Index = () => {
  // Render the poster-style home page layout
  return <PosterHome />;
};

export default Index;
