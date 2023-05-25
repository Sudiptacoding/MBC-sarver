const postmodel = require('../models/postmodel')

const postcontrollers = async (req, res) => {
    try {
        const post = new postmodel({
            name: req.body.name,
            image: req.file.filename
        })
        const savepost = await post.save();
        if (savepost) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: savepost })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

const getControler = async (req, res) => {
    try {
        const post = await postmodel.find({});
        if (post) {
            res.status(200).send({ success: true, mgs: 'user is saved', data: post })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}

// delet post 
const deletPost = async (req, res) => {
    try {
        const id = req.params.id;
        await postmodel.deleteOne({ _id: id })
        res.status(200).send({ success: true, mgs: 'Post delet successfully' })
    } catch (error) {
        res.status(404).send({ success: false, mgs: error.message })
    }
}


// upded

const updedpost = async (req, res) => {
    try {
        if (req.file !== undefined) {
            const name = req.body.name;
            const image = req.file.filename;
            const id = req.body.id;
            await postmodel.findByIdAndUpdate({ _id: id }, { $set: { name: name, image: image } })
            res.status(200).send({ success: true, mgs: 'upded successw fully' })
        } else {
            const name = req.body.name;
            const id = req.body.id;
            await postmodel.findByIdAndUpdate({ _id: id }, { $set: { name: name } })
            res.status(200).send({ success: true, mgs: 'upded successw fully' })
        }
    } catch (error) {
        res.status(404).send({ success: false, mgs: 'passi na' })
    }
}




module.exports = {
    postcontrollers,
    getControler,
    deletPost,
    updedpost,
}