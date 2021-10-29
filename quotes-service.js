export default {
    execute: (limit) => {
        const INSPIRATIONAL_QUOTES_END_POINT = "https://type.fit/api/quotes";
        return fetch(INSPIRATIONAL_QUOTES_END_POINT)
            .then((response) => response.json())
            .then(quotes => quotes.slice(0, limit));
    }
}