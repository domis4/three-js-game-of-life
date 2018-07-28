import { Clock } from 'three'

const clock = new Clock()

export let delta = 1
export const getDelta = () => delta
export const setDelta = newDelta => (delta = 1 + -newDelta)

export default clock
