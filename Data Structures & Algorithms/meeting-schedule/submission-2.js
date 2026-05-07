class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length <= 1) return true;

        // Step 1: Sort by start time
        intervals.sort((a, b) => a.start - b.start);

        // Step 2: Check for overlaps
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false; // Overlap found
            }
        }

        return true; // No overlaps
    }
}