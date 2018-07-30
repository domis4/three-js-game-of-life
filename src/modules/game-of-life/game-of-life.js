import { Scene, CubeGeometry, MeshLambertMaterial, Mesh } from 'three'
import { update as updateCamera } from '../camera/camera'
import ambientLight from '../ambient-light/ambient-light'
import grid from '../grid/grid'
import directionalLight from '../directional-light/directional-light'
import { gridSize } from './game-of-life.const'
import { getNextGenerationGrid } from './game-of-life.util'

export const scene = new Scene()

let cubeGrid = new Array(gridSize / 2).fill(new Array(gridSize / 2).fill({ cube: null, state: false }))
const start = gridSize / 4 - 0.5

scene.add(grid)
scene.add(ambientLight)
scene.add(directionalLight)

const cubeMaterial = new MeshLambertMaterial({
  color: '#bbb',
})
const cubeGeometry = new CubeGeometry(1, 1, 1)

cubeGrid = cubeGrid.map((row, y) =>
  row.map((cell, x) => {
    const shouldCreate = Math.random() > 0.5
    if (!shouldCreate) {
      return cell
    }

    var cube = new Mesh(cubeGeometry, cubeMaterial)

    cube.position.x = x - start
    cube.position.y = 0
    cube.position.z = y - start

    scene.add(cube)
    return { cube, state: true }
  })
)

window.getNextGenerationGrid = () => {
  cubeGrid = getNextGenerationGrid(cubeGrid)
  cubeGrid = cubeGrid.map((row, y) =>
    row.map((cell, x) => {
      cell.cube && scene.remove(cell.cube)
      cell.cube = null

      if (cell.state) {
        const cube = new Mesh(cubeGeometry, cubeMaterial)
        cube.position.x = x - start
        cube.position.y = 0
        cube.position.z = y - start
        scene.add(cube)
        return { ...cell, cube }
      }

      return { ...cell }
    })
  )
}

export const update = () => {
  updateCamera()
}
