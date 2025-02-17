function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched.");
        }, 2500);
    });
};

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data fetched.");
        }, 3500);
    });
};P

async function getBlogData() {
    try {
        console.log("Fetching Blog Data...");
        console.log("Loading...");
        
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData(); -> better syntax than this:👇🏻
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ]);
        console.log(postData);
        console.log(commentData);
        
        console.log("Yahi chahiye tha na tujhe!!!");
    } catch (error) {
        console.error("Error fetching blog data.", error);
    }
}

getBlogData();