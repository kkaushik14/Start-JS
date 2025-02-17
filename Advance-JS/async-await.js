function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "KKOS", Url: "https://KK.Pvt.org"})
            reject("Error in fetching data...")
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        console.log("Loading...");
        let userData = await fetchUserData();
        console.log("User data fetched successfully.");
        console.log("User data: ", userData);
    } catch (error) {
        console.log("Error fetching data...", error);
    }
}

getUserData();