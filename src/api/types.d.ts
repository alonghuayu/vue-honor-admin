export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}

// 英雄数据结构
export interface Hero {
  id: number
  uname: string
  name: string
  icon: string
  classify: string[]
}

// 玩家
export interface Player{
  id: number
  accountname: string // 账号
  nickname: string // 昵称
  avatar: string // 头像
  level: number // 等级
  exp: number // 经验值
  rank: number // 段位
  bravepoints: number // 积分
  winningstreak: number // 连胜场次
  wanttoplay: Hero[] // 想玩
}
