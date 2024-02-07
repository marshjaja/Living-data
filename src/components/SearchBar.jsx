import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {


    async function getData() {
        const url = 'https://uk-real-estate-rightmove.p.rapidapi.com/rent/property-to-rent?identifier=REGION%5E1036&search_radius=0.0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
                'X-RapidAPI-Host': 'uk-real-estate-rightmove.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

            // render your result.data array!
            
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className='d-flex flex-col'>
                <Form.Control size="lg" type="text" placeholder="Search by Region name" />
                <Button variant="secondary" onClick={getData}>Search</Button>
            </div>
            <br />
            <img src="https://www.zoopla.co.uk/static/images/mashery/powered-by-zoopla-150x73.png" width="150" height="73" title="Property information powered by Zoopla" alt="Property information powered by Zoopla" border="0"></img>
        </>
    );
}

export default SearchBar;


//const apiResponse = [
// { id: 1, address: