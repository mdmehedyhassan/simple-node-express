const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WoW. i am excited to learn Node and express with nodemon. Automatic restart.')
});

const users = [
    { id: 0, name: 'md tonmoy', email: 'mdtonmoy@gmail.com', phone: '0187544555' },
    { id: 1, name: 'mehedy', email: 'mnehedy@gmail.com', phone: '01710917101' },
    { id: 2, name: 'hassan', email: 'hassan@gmail.com', phone: '0124151516' },
    { id: 3, name: 'rohiz', email: 'rohix@gmail.com', phone: '0165484146' },
    { id: 4, name: 'easin', email: 'easin@gmail.com', phone: '01710416411' },
    { id: 5, name: 'Shalauddin', email: 'shalauddin@gmail.com', phone: '01584964141' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
})

// dynamic api
app.get('/users/:id', (req, res) => {
    // const id = req.params.id;
    // const search = users.find(user => user.id == id);
    // res.send(search);
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});

// POST Method:
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli')
});

app.listen(port, () => console.log('listen in the port', port))