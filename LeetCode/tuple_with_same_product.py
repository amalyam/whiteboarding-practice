# 1726. Tuple with Same Product

# Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

 
# Example 1:

# Input: nums = [2,3,4,6]
# Output: 8
# Explanation: There are 8 valid tuples:
# (2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
# (3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)

# Example 2:

# Input: nums = [1,2,4,5,10]
# Output: 16
# Explanation: There are 16 valid tuples:
# (1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
# (2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
# (2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
# (4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)


# Constraints:

#     1 <= nums.length <= 1000
#     1 <= nums[i] <= 104
#     All elements in nums are distinct.

from math import comb

def tupleSameProduct(nums):
    total = 0
    product_pairs = {}

    for i in range(len(nums)-1):
        for j in range(i+1, len(nums)):
            product = nums[i]*nums[j]
            if product not in product_pairs:
                product_pairs[product] = 0
            product_pairs[product] += 1

    for pairs in product_pairs.values():
        if pairs > 1:
            total += 8 * pairs * (pairs - 1) // 2

    return total

# print(tupleSameProduct([2,3,4,6])) # 8
# print(tupleSameProduct([1,2,4,5,10])) # 16
# print(tupleSameProduct([2,3,4,6,8,12])) # 40
# print(tupleSameProduct([1,2,4,8,16,32])) # 56
print(tupleSameProduct([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192])) # 1288
