class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const Hash = {}
        var VarTarget = 0;
        for (let i=0; i<nums.length; i++) {
            VarTarget = target-nums[i]
            if (Hash[VarTarget]!=undefined) {
                return [Hash[VarTarget], i]
            }
            Hash[nums[i]]=i
        }
        return false
    }
}
