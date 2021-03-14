import { Request, Response } from 'express'
export const getPlayers = (req: Request, res: Response) => {
    res.json([1, 2, 3])
}
