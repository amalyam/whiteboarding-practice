# Given a string, write a function that returns the character 
# that is the majority of the string. If there is no majority 
# character, return None. A majority is considered as having 
# more than n / 2 instances where n is the length of the string.

def majority_char(str):
    letter_dict = {}
    for letter in str:
        if letter not in letter_dict:
            letter_dict[letter] = str.count(letter)
            
    majority_char = ""
    for letter, occurrences in letter_dict.items():
        if occurrences > (len(str)//2) and majority_char == "":
            majority_char = letter
            
    return majority_char or None
        


str = 'all'
str2 = 'welcome to the jungle'

print(majority_char(str))           # 'l'
print(majority_char(str2))          # None
