const getRandomNumberService = () => {
    const ENDPOINT_TO_GET_RANDOM_TWO_NUMBERS = 'https://www.random.org/integers/?num=1&min=1&max=99&col=1&base=10&format=plain&rnd=new';
    return fetch(ENDPOINT_TO_GET_RANDOM_TWO_NUMBERS).then(response => response.json());
}

export default {
    stringSubstitution: (string) => {
        console.log(
            'Hello, %s', string
        );
    },
    numberSubstitution: () => {
        const INCREMENT_NUMBER_BY_INTEGER = 1;
        const INCREMENT_RANDOM_NUMBER_BY_FLOAT = 1.5;
        getRandomNumberService().then(number => {
            console.log('The integer number is: %d', number);
            console.log(
                'The integer number is: %i',
                number + INCREMENT_NUMBER_BY_INTEGER
            );
            console.log(
                'The float number is: %f',
                number + INCREMENT_RANDOM_NUMBER_BY_FLOAT
            );
        });
    },
    objectSubstitution: () => {
        const AuthorInfo = {
            Author: 'Ahmed Helal',
            Email: 'Ahmed.Helal.Online@gmail.com',
            LinkedIn: 'https://www.linkedin.com/in/ahmedhelalahmed',
            Github: 'https://www.linkedin.com/in/ahmedhelalahmed',
        };
        console.log(
            'Contact me: %o',
            AuthorInfo
        );
    }
}

