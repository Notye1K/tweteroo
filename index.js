import express, {json} from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(json())

const users = [
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]


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

        for (let i =10; i>0; i--){
            lastTen.push(tweets[tweets.length - i])
        }
        res.send(lastTen)
    }
    else{
        res.send(tweets)
    }
})

server.post('/sign-up', (req, res) => {
    const body = req.body
    if(body.avatar === undefined || body.username === undefined || body === undefined){
        res.status(400).send('Todos os campos são obrigatórios!')
    }
    else{
        users.push(req.body)
        res.status(201).send('OK')
    }
    console.log(body);
})

server.post('/tweets', (req, res) => {
    const body = req.body
    if (body.tweet === undefined || body.username === undefined || body === undefined) {
        res.status(400).send('Todos os campos são obrigatórios!')
    }
    else{
        const user = users.find(v => v.username === body.username)
        body.avatar = user.avatar
        tweets.push(body)
        res.status(201).send('OK')
    }
    console.log(body);

})

server.get('/tweets/:USERNAME', (req, res) => {
    const userTweets = tweets.filter(v => v.username === req.params.USERNAME)
    res.send(userTweets)
    console.log(userTweets);
})

server.listen(5000, () => {
    console.log('runnig')
})