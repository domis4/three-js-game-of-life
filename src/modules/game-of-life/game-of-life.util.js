export const getNextGenerationGrid = grid =>
  grid.map((row, y) => row.map((cell, x) => getNextGenerationCell(grid, y, x)))

export const getNextGenerationCell = (grid, y, x) => {
  const neighbours = getCellNeigbours(grid, y, x)
  const cell = grid[y][x]

  if (!cell.state && neighbours === 3) {
    return { ...cell, state: true }
  }

  if (cell.state && neighbours < 2) {
    return { ...cell, state: false }
  }

  if (cell.state && (neighbours === 2 || neighbours === 3)) {
    return { ...cell, state: true }
  }

  if (cell.state && neighbours > 3) {
    return { ...cell, state: false }
  }

  return { ...cell }
}

export const getCellNeigbours = (grid, y, x) => {
  let neighbours = 0
  y > 0 && grid[y - 1][x].state && neighbours++
  x > 0 && grid[y][x - 1].state && neighbours++
  y > 0 && x > 0 && grid[y - 1][x - 1].state && neighbours++

  y < grid.length - 1 && grid[y + 1][x].state && neighbours++
  x < grid.length - 1 && grid[y][x + 1].state && neighbours++
  y < grid.length - 1 && x < grid.length - 1 && grid[y + 1][x + 1].state && neighbours++

  return neighbours
}
