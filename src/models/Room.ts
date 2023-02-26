import { Player } from "./Player"

export interface Room {
    id: string
    name: string
    password: string
    players: Player[]
    points: number[]
}