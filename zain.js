async function fetchPosts() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await res.json();
        console.log(posts);
        return posts;
    } catch (err) {
        console.log(err);
    }
}


fetchPosts().then(
    (posts) => {
        let postsUl = document.getElementById("posts-list");
        let inner = '';
        for(let i= 0 ; i < posts.length; i++){
              inner += " &nbsp;&nbsp;<li>" + "userId:" + posts[i].userId+ ".<br>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: " + posts[i].id + ".<br>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body: " +posts[i].body +".<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: " + posts[i].title  +".<br></li>" ;
        }
        postsUl.innerHTML = inner;
       
    },
    (err) => console.log(err)
);