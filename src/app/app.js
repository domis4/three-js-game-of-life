import { WebGLRenderer, AxesHelper } from 'three'
import stats from '../modules/stats/stats'
import clock, { setDelta } from '../modules/delta-time/delta-time'
import camera from '../modules/camera/camera'
import { scene, update } from '../modules/game-of-life/game-of-life'

window.addEventListener('resize', onWindowResize, false)

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

const renderer = new WebGLRenderer({ antialias: true })

renderer.setClearColor('#fff')
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(stats.dom)

const axesHelper = new AxesHelper() // X red. Y green. Z blue.
scene.add(axesHelper)

const render = () => {
  stats.begin()
  setDelta(clock.getDelta())
  renderer.render(scene, camera)
  update()
  stats.end()

  requestAnimationFrame(render)
  clock.start()
}

render()

export default renderer.domElement
