import { PerspectiveCamera } from 'three'

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 4
camera.position.y = 20
camera.rotation.x = (-80 * Math.PI) / 180

export default camera
