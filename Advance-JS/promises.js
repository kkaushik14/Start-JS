function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if(success) {
                resolve("Data fetched successfully")
            } else {
                reject("Error fetching data")
            }
        }, 3000);
    });
}

fetchData()
.then((data) => {
    console.log(data);
    return data.toUpperCase();
})

.then((upperCase) => {
    console.log(upperCase);
})

.catch((error) => {
    console.log(error);
})
