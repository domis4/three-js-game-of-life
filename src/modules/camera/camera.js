import { PerspectiveCamera } from 'three'

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 4
// camera.position.y = 10
// camera.rotation.x = (-75 * Math.PI) / 180

export default camera
