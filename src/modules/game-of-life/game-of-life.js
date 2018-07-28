import { Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

export const scene = new Scene()

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: '#fff' })
const cube = new Mesh(geometry, material)

scene.add(cube)

export const update = () => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
}
