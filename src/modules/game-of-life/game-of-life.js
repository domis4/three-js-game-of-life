import { Scene, CubeGeometry, MeshLambertMaterial, Mesh } from 'three'
import ambientLight from '../ambient-light/ambient-light'
import grid from '../grid/grid'
import directionalLight from '../directional-light/directional-light'
import { gridSize } from './game-of-life.const'

export const scene = new Scene()

scene.add(grid)
scene.add(ambientLight)
scene.add(directionalLight)

const cubeMaterial = new MeshLambertMaterial({
  color: '#bbb',
})

new Array(gridSize / 2).fill().forEach((n, i) => {
  new Array(gridSize / 2).fill().forEach((n, j) => {
    const shouldCreate = Math.random() > 0.5
    if (!shouldCreate) {
      return
    }

    const cubeGeometry = new CubeGeometry(1, 1, 1)
    var cube = new Mesh(cubeGeometry, cubeMaterial)
    const start = gridSize / 4 - 0.5

    cube.position.x = i - start
    cube.position.y = 0
    cube.position.z = j - start

    scene.add(cube)
  })
})

export const render = () => {}

export const update = () => {}
