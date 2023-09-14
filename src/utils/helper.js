export const filterData = (searchText, restaurantData) => {
    const filtered = restaurantData.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return filtered;
   }