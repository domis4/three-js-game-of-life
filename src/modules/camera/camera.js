import { PerspectiveCamera } from 'three'

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 25
camera.position.y = 60

camera.rotation.x = (-70 * Math.PI) / 180

export default camera

export const update = () => {}
