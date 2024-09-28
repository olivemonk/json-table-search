export const parseSearchQuery = (query: string) => {
    const filters: { [key: string]: string } = {};
    query
        .toLowerCase()
        .split(' ')
        .forEach((pair) => {
            const [key, value] = pair.split(':');
            if (key && value) {
                filters[key.trim()] = value.trim();
            }
        });
    return filters;
};
