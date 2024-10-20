export function filterEvents(mockEvents, selectedCategory, selectedPriceRange) {
    return mockEvents.filter(event => {
        const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
        const priceMatch = event.price >= selectedPriceRange[0] && event.price <= selectedPriceRange[1];
        return categoryMatch && priceMatch;
    });
  }