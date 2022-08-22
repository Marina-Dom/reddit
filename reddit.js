let redditThread =  document.getElementById('reddit-thread');

fetch ('https://www.reddit.com/r/aww/.json')
    .then(response => response.json())
    .then(myData => {
        
    console.log(myData);
    console.log(typeof myData);
    
    console.log(myData.data.children);
    let jsonData = myData.data.children;

    for (const redditData of jsonData){
    //console.log(redditData.data.title);
    let p = document.createElement('p'); //can put ('h1') to make bigger 
    p.innerHTML = redditData.data.title;
    redditThread.append(p);

    let img = document.createElement('img');
    img.setAttribute (
        'src',
        redditData.data.thumbnail
    );
    redditThread.append(img);

    let br = document.createElement('br');
    redditThread.append(br);

    let a = document.createElement('a');
    let link = document.createTextNode('Access thread here!');
    a.setAttribute(
        'href',
        redditData.data.url
    );
    a.append(link);
    redditThread.append(a);

 }
});

//Promise has a .then function on it!
