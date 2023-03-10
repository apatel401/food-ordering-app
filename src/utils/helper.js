export const filterData = (searchText, restaurantData) => {
    const filtered = restaurantData.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return filtered;
   }