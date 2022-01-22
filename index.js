import express from 'express'

const server = express()

const user = {
    username: 'bobesponja',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}

const tweet = {
    username: "bobesponja",
    tweet: "eu amo o hub",
}

const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
]

server.get('/tweets', (req, res) => {
    if (tweets.length > 10){

        const lastTen = []

        for (let i =11; i>0; i--){
            lastTen.push(tweets[tweets.length - i])
        }
        res.send(lastTen)
    }
    else{
        res.send(tweets)
    }
})

server.listen(5000, () => {
    console.log('runnig')
})