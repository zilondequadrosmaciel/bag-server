import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "dghnm11qf",
    api_key: "465585158484295",
    api_secret: "0TdsIdXNQAKcr5A6cLm6mnjP4PQ"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "bags"
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}