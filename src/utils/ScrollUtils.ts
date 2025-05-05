/**
 * Smooth scroll to a section with an optional offset
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Additional offset in pixels (default: 0)
 */
export const scrollToSection = (sectionId: string, offset = 0): void => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const position = element.getBoundingClientRect().top + window.pageYOffset + offset;
    
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }
};

/**
 * Check if an element is in the viewport
 * @param element - The DOM element to check
 * @param offset - Offset in pixels (default: 0)
 * @returns boolean - Whether the element is in the viewport
 */
export const isInViewport = (element: Element, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom >= offset &&
    rect.right >= 0
  );
};

/**
 * Add a scroll event to trigger animations when elements come into view
 * @param selector - CSS selector for the elements to animate
 * @param animationClass - CSS class to add when the element is in view
 */
export const addScrollAnimations = (selector: string, animationClass: string): void => {
  const elements = document.querySelectorAll(selector);
  
  const checkVisibility = () => {
    elements.forEach(element => {
      if (isInViewport(element, 50)) {
        element.classList.add(animationClass);
      }
    });
  };
  
  // Check on page load
  checkVisibility();
  
  // Check on scroll
  window.addEventListener('scroll', checkVisibility);
};