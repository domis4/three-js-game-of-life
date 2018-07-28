import { WebGLRenderer, AxesHelper } from 'three'
import stats from '../modules/stats/stats'
import camera from '../modules/camera/camera'
import { scene, update } from '../modules/game-of-life/game-of-life'

window.addEventListener('resize', onWindowResize, false)

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

const renderer = new WebGLRenderer({ antialias: true })

renderer.setClearColor('#000')
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(stats.dom)

const axesHelper = new AxesHelper() // X red. Y green. Z blue.
scene.add(axesHelper)

const render = () => {
  stats.begin()
  renderer.render(scene, camera)
  update()
  stats.end()

  requestAnimationFrame(render)
}

render()

export default renderer.domElement
