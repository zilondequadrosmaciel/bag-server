import Bag from '../models/Bag.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra';

export const all = async (req, res) => {
    try {
        const bags = await Bag.find();
        res.send(bags);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const create = async (req, res) => {
    try {
        const { description, detail, color, model, brand, price } = req.body;
        let image;
        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }
        const bag = new Bag({ description, detail, color, model, brand, price, image })
        await bag.save()
        res.json(bag);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const bag = await Bag.findByIdAndUpdate(id, req.body, { new: true })
        res.json(bag);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const bag = await Bag.findByIdAndDelete(id)
        if (!bag) return res.sendStatus(404)
        if (bag.image.public_id) {
            await deleteImage(bag.image.public_id)
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const one = async (req, res) => {
    try {
        const id = req.params.id
        const bag = await Bag.findById(id)
        if (!bag) return res.sendStatus(404)
        res.send(bag);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
