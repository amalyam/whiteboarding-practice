class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # nums_dict = {index: value for index, value in enumerate(nums)}

        for i in range(0, len(nums)):
            if (target - nums[i]) in nums[i+ 1:]:
                return [i, nums.index(target - nums[i], i + 1)]
            
            
# brute force solutions O(n^2)
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:

#         for i in range (0,len(nums)):
#             for j in range (0, len(nums)):
#                 if nums[i] + nums[j] == target and i != j:
#                     return [i, j]
