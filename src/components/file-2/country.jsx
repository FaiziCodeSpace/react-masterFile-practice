import List from "./nested.jsx";

function Countries(){
    const countries = [
    {
        country: 'Pakistan',
        continent: 'Asia',
        system: 'ideology',
        aviation: [
            {
                branch: 'airforce',
                position: '7th',
            },
            {
                branch: 'army',
                position: '10th',
            },
            {
                branch: 'navy',
                position: '14th',
            }
        ]
    },
    {
        country: 'India',
        continent: 'Asia',
        system: 'democracy',
        aviation: [
            {
                branch: 'airforce',
                position: '4th',
            },
            {
                branch: 'army',
                position: '2nd',
            },
            {
                branch: 'navy',
                position: '7th',
            }
        ]
    },
    {
        country: 'China',
        continent: 'Asia',
        system: 'communism',
        aviation: [
            {
                branch: 'airforce',
                position: '3rd',
            },
            {
                branch: 'army',
                position: '1st',
            },
            {
                branch: 'navy',
                position: '2nd',
            }
        ]
    },
    {
        country: 'USA',
        continent: 'North America',
        system: 'capitalism',
        aviation: [
            {
                branch: 'airforce',
                position: '1st',
            },
            {
                branch: 'army',
                position: '3rd',
            },
            {
                branch: 'navy',
                position: '1st',
            }
        ]
    }
];

    return(
        <List countries={countries}/>
    )
}

export default Countries;