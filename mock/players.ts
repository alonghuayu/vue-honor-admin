import { Request, Response } from 'express'
export const getArticle = (req: Request, res: Response) => {
    res.json([1, 2, 3])
}
