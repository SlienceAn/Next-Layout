import type { NextApiRequest, NextApiResponse } from 'next'

function middleware(req: NextApiRequest, res: NextApiResponse) {
    return new Promise((resolve, reject) => {
        if (req.headers.authorization) {
            return resolve("讚啦!")
        } else {
            return reject("哭阿..")
        }
    })
}

export default async function f(req: NextApiRequest, res: NextApiResponse) {
    await middleware(req, res)
    const { slug } = req.query
    let text = ""
    switch (slug) {
        case "1":
            text = "one"
            break;
        case "2":
            text = "two"
            break;
        case "3":
            text = "three"
            break;
        case "4":
            text = "four"
            break;
        case "5":
            text = "five"
            break;

    }
    res.status(200).json({ name: `This is a ${text}` })
}

