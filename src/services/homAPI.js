import axios from "axios";

// export const axiosBestBook = async () => {
//     const response = await axios('https://abuk.com.ua/api/web/books/catalog');
//     return response.data.best_books;
// };

// export const axiosBooks = async () => {
//     const response = await axios('https://abuk.com.ua/api/web/books?order=created_at%20desc&limit=20');
//     return response.data.books;
// };

// export const axiosGenres = async () => {
//     const response = await axios('https://abuk.com.ua/api/web/genres')
//     return response.data.genres;
// };

// export const axiosPopular = async () => {
//     const response = await axios('https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=20')
//     return response.data.books
// };

export const topluApiCall = async () => {

    const requestOne = axios.get("https://abuk.com.ua/api/web/books/catalog");
    const requestTwo = axios.get("https://abuk.com.ua/api/web/books?order=created_at%20desc&limit=20");
    const requestThree = axios.get("https://abuk.com.ua/api/web/genres");
    const requestFour = axios.get("https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=20");

    await axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
        // const responseOne = responses[0]
        // const responseTwo = responses[1]
        // const responesThree = responses[2]
        // const responesFour = responses[3]

        const allData = [responses[0], responses[1], responses[2], responses[3]]
        console.log(allData);
        return allData


        // use/access the results 
    })).catch(errors => {
        console.log(errors);
    })


}
