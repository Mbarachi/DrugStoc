const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("./permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const express = require("express");
const app = express()

const cors = require("cors");
app.use(cors({ origin:true }))
const db = admin.firestore()


// Create 

app.post('/api/create', (req, res) => {
    (async () => {
        try
            {
                await db.collection('tasks').doc().create({
                        taskname: req.body.taskname,
                        name: req.body.name,
                        price: req.body.price,
                        delivery: req.body.delivery,
                        tag: req.body.tag,
                        status: req.body.status,
                        imageurl: req.body.imageurl
                })
                    return res.status(200).send();
            }
        catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })();
})

// Get tasks

app.get('/api/read', (req, res) => {
    (async () => {
        try
            {
                let query = db.collection('tasks');
                let response = [];

                await query.get().then(querySnapshot => {
                    let docs = querySnapshot.docs; 

                    for(let doc of docs){
                        const item = {
                            id: doc.id,
                            taskname: doc.data().taskname,
                            name: doc.data().name,
                            price: doc.data().price,
                            imageurl: doc.data().imageurl,
                            delivery: doc.data().delivery,
                            status: doc.data().status,
                            tag: doc.data().tag
                        }
                        response.push(item)
                    }
                    return response
                })
                    return res.status(200).send(response)
            }
        catch(error){
            console.log(error)
            return res.status(500).send(error)
        };
    })()
})

// Update 
app.put('/api/update/:id', (req, res) => {
    (async () => {
        try
            {
                const document = db.collection('tasks').doc(req.params.id)

                await document.update({
                        taskname: req.body.taskname,
                        name: req.body.name,
                        price: req.body.price,
                        delivery: req.body.delivery,
                        tag: req.body.tag,
                        status: req.body.status,
                        imageurl: req.body.imageurl
                })
                return res.status(200).send()
            }
        catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })();
})

// Delete

app.delete('/api/delete/:id', (req, res) => {
    (async () => {
        try
            {
                const document = db.collection('tasks').doc(req.params.id)

                await document.delete();
                return res.status(200).send()
            }
        catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })();
})




exports.app = functions.https.onRequest(app)