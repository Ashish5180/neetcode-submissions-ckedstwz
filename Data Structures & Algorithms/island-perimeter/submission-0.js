class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let perimeter = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    perimeter += 4;

                    // Check top neighbor
                    if (i > 0 && grid[i - 1][j] === 1) {
                        perimeter -= 2;
                    }

                    // Check left neighbor
                    if (j > 0 && grid[i][j - 1] === 1) {
                        perimeter -= 2;
                    }
                }
            }
        }

        return perimeter;
    }
}