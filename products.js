let response = fetch('https://calm-reef-04752.herokuapp.com');  
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
    fetch('https://calm-reef-04752.herokuapp.com/create_products')
    .then(response => response.json())
    .then(data => console.log(data));

    async function fetchProducts() {
        let response = await fetch('https://calm-reef-04752.herokuapp.com/create_products');
        let data = await response.json();
        console.log(data);
    }

    async function fetchProducts() {
        let response = await fetch('https://calm-reef-04752.herokuapp.com/create_products');
    
        console.log(response.status); // 200
        console.log(response.statusProduct); // OK
    
        if (response.status === 200) {
            let data = await response.json();
            // handle data
        }
    }
    
    fetchProducts();

    let response = await fetch('https://calm-reef-04752.herokuapp.com/non-existence.create_products');

console.log(response.status); // 400
console.log(response.statusProducts); // Not Found
