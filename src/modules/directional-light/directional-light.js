import { DirectionalLight } from 'three'

const directionalLight = new DirectionalLight(0xffffff)
directionalLight.position.x = 50
directionalLight.position.y = 50
directionalLight.position.z = 50
directionalLight.position.normalize()

export default directionalLight
