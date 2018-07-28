import { Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import { getDelta } from '../delta-time/delta-time'

const fieldAmount = 25
const fieldSize = 1
const field = []

export const scene = new Scene()

const init = () => {
  while (scene.children.length > 0) {
    scene.remove(scene.children[0])
  }

  new Array(fieldAmount).fill().map((n, i) => {
    field[i] = []
    new Array(fieldAmount).fill().map((m, j) => {
      const geometry = new BoxGeometry(fieldSize, fieldSize, fieldSize)
      const alive = new MeshBasicMaterial({ color: '#fff' })
      const dead = new MeshBasicMaterial({ color: '#aaa' })
      const isDeadOrAlive = Math.random() >= 0.5 ? alive : dead
      const cube = new Mesh(geometry, isDeadOrAlive)
      cube.position.x = i * fieldSize
      cube.position.z = j * fieldSize

      field[i][j] = cube
      scene.add(cube)
    })
  })
}

init()
scene.position.x = -fieldAmount / 2
scene.position.z = -fieldAmount / 2
window.getNextStep = () => init()

export const update = () => {}
