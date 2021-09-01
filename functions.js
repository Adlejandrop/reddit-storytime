const axios = require('axios');
const getPostJSON = async(url)=>{
    const postURL = url
    const formattedURL = postURL.slice(0,-1)+".json"
    const {data:postJSON} = await axios.get(formattedURL)
    return {title: postJSON[0].data.children[0].data.title, posts:postJSON[1].data.children}

}



module.exports = {getPostJSON}

// "https://www.reddit.com/r/AskReddit/comments/pda1q5/married_couples_how_do_you_turn_down_sex_without/"


