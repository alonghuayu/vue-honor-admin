import { Request, Response } from 'express'
import { Hero, Player } from "../src/api/types"
import { heros } from "./heros"
import faker from "faker"

faker.locale = 'zh_CN'

const playerCount = 100
const playerList: Player[] = []

for (let i = 0; i < playerCount; i++) {
    playerList.push({
        id: i,
        accountname: faker.name.findName(),
        nickname: faker.name.findName(),
        avatar: faker.image.avatar(),
        level: faker.random.number(500),
        exp: faker.random.number(1000000),
        rank: faker.random.number(40),
        bravepoints: faker.random.number(10000),
        winningstreak: faker.random.number(100),
        wanttoplay: genWantoplay(),
    })
}

function genWantoplay() {
    let wanttoplay: Set<Hero> = new Set()
    while (wanttoplay.size < 3) {
        wanttoplay.add(heros[faker.random.number(30)])
    }
    return Array.from(wanttoplay)
}

export const getPlayers = (req: Request, res: Response) => {
    // 获取分页，关键词等参数
    const { accountname, page = 1, limit = 10 }:any = req.query

    let mockList = playerList.filter(item => {
        if (accountname && item.accountname.indexOf(accountname) < 0) {
            return false
        } else {
            return true
        }
    })

    const pageList = mockList.filter((item, index) => {
        return index < limit * page && index >= limit * (page - 1)
    })

    res.json({
        code: 20000,
        data: {
            total: pageList.length,
            players: pageList
        }
    })
}
