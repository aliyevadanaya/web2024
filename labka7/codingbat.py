# def sleep_in(weekday, vacation):
#   if not weekday or vacation:
#     return True
#   else:
#     return False

# def monkey_trouble(a_smile, b_smile):
#   if a_smile and b_smile:
#     return True
#   if not a_smile and not b_smile:
#     return True
#   return False

# def sum_double(a, b):
#   sum = a + b
#   if a == b:
#     sum = sum * 2
#   return sum

# def diff21(n):
#   if n <= 21:
#     return 21 - n
#   else:
#     return (n - 21) * 2

# def parrot_trouble(talking, hour):
#   return (talking and (hour < 7 or hour > 20))

# def makes10(a, b):
#   return (a == 10 or b == 10 or a+b == 10)

# def near_hundred(n):
#   return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

# def pos_neg(a, b, negative):
#   if negative:
#     return (a < 0 and b < 0)
#   else:
#     return ((a < 0 and b > 0) or (a > 0 and b < 0))

# def not_string(str):
#   if len(str) >= 3 and str[:3] == "not":
#     return str
#   return "not " + str

# def missing_char(str, n):
#   front = str[:n]   
#   back = str[n+1:] 
#   return front + back

# def front_back(str):
#   if len(str) <= 1:
#     return str
#   mid = str[1:len(str)-1] 
#   return str[len(str)-1] + mid + str[0]

# def front3(str):
#   front_end = 3
#   if len(str) < front_end:
#     front_end = len(str)
#   front = str[:front_end]
#   return front + front + front 

# def string_times(str, n):
#   result = ""
#   for i in range(n):  
#     result = result + str 
#   return result

# def front_times(str, n):
#   front_len = 3
#   if front_len > len(str):
#     front_len = len(str)
#   front = str[:front_len]
#   result = ""
#   for i in range(n):
#     result = result + front
#   return result

# def string_bits(str):
#   result = ""
#   for i in range(len(str)):
#     if i % 2 == 0:
#       result = result + str[i]
#   return result

# def string_splosion(str):
#   result = ""
#   for i in range(len(str)):
#     result = result + str[:i+1]
#   return result

# def last2(str):
#   if len(str) < 2:
#     return 0
#   last2 = str[len(str)-2:]
#   count = 0
#   for i in range(len(str)-2):
#     sub = str[i:i+2]
#     if sub == last2:
#       count = count + 1
#   return count

# def array_count9(nums):
#   count = 0
#   for num in nums:
#     if num == 9:
#       count = count + 1
#   return count

# def array_front9(nums):
#   end = len(nums)
#   if end > 4:
#     end = 4
#   for i in range(end): 
#     if nums[i] == 9:
#       return True
#   return False

# def array123(nums):
#   for i in range(len(nums)-2):
#     if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
#       return True
#   return False

# def string_match(a, b):
#   shorter = min(len(a), len(b))
#   count = 0
#   for i in range(shorter-1):
#     a_sub = a[i:i+2]
#     b_sub = b[i:i+2]
#     if a_sub == b_sub:
#       count = count + 1
#   return count

# def hello_name(name):
#     return "Hello " + name + "!"

# def make_abba(a, b):
#     return a + b

# def make_tags(tag, word):
#     return "<" + tag + ">" + word + "</" + tag + ">"

# def make_out_word(out, word):
#     return out[:2] + word + out[2:]

# def extra_end(string):
#     return string[-2:] * 3

# def first_two(string):
#     return string[:2]

# def first_half(string):
#     return string[:len(string)//2]

# def without_end(string):
#     return string[1:-1]

# def combo_string(a, b):
#     if len(a) < len(b):
#         return a + b + a
#     else:
#         return b + a + b
    
# def non_start(a, b):
#     return a[1:] + b[1:]

# def left2(string):
#     return string[2:] + string[:2]

# def first_last6(nums):
#     return nums[0] == 6 or nums[-1] == 6

# def same_first_last(nums):
#     return len(nums) >= 1 and nums[0] == nums[-1]

# def make_pi():
#     return [3, 1, 4]

# def common_end(a, b):
#     return a[0] == b[0] or a[-1] == b[-1]

# def sum3(nums):
#     return sum(nums)

# def rotate_left3(nums):
#     return nums[1:] + nums[:1]

# def reverse3(nums):
#     return nums[::-1]

# def max_end3(nums):
#     max_value = max(nums[0], nums[-1])
#     return [max_value, max_value, max_value]

# def sum2(nums):
#     return sum(nums[:2])

# def middle_way(a, b):
#     return [a[1], b[1]]

# def make_ends(nums):
#     return [nums[0], nums[-1]]

# def has23(nums):
#     return 2 in nums or 3 in nums

# def cigar_party(cigars, is_weekend):
#     if is_weekend:
#         return cigars >= 40
#     else:
#         return 40 <= cigars <= 60

# def date_fashion(you, date):
#     if you <= 2 or date <= 2:
#         return 0  
#     elif you >= 8 or date >= 8:
#         return 2 
#     else:
#         return 1  

# def squirrel_play(temperature, is_summer):
#     upper_limit = 100 if is_summer else 90
#     return 60 <= temperature <= upper_limit

# def caught_speeding(speed, is_birthday):
#     extra_speed = 5 if is_birthday else 0
#     if speed <= 60 + extra_speed:
#         return 0  
#     elif 61 + extra_speed <= speed <= 80 + extra_speed:
#         return 1  
#     else:
#         return 2 

# def sorta_sum(a, b):
#     total = a + b
#     if 10 <= total <= 19:
#         return 20
#     else:
#         return total

# def alarm_clock(day, vacation):
#     if vacation:
#         if day in [0, 6]:  
#             return "off"
#         else: 
#             return "10:00"
#     else:
#         if day in [0, 6]:  
#             return "10:00"
#         else: 
#             return "7:00"

# def love6(a, b):
#     return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

# def in1to10(n, outside_mode):
#     if outside_mode:
#         return n <= 1 or n >= 10
#     else:
#         return 1 <= n <= 10

# def near_ten(num):
#     return num % 10 <= 2 or num % 10 >= 8

# def make_bricks(small, big, goal):
#     max_big = min(big, goal // 5)
#     remaining = goal - (max_big * 5)
#     return remaining <= small

# def lone_sum(a, b, c):
#     if a == b == c:
#         return 0
#     elif a == b:
#         return c
#     elif b == c:
#         return a
#     elif a == c:
#         return b
#     else:
#         return a + b + c

# def lucky_sum(a, b, c):
#     if a == 13:
#         return 0
#     elif b == 13:
#         return a
#     elif c == 13:
#         return a + b
#     else:
#         return a + b + c

# def fix_teen(n):
#     if 13 <= n <= 19 and n not in [15, 16]:
#         return 0
#     return n

# def no_teen_sum(a, b, c):
#     return fix_teen(a) + fix_teen(b) + fix_teen(c)

# def round10(num):
#     return num + (10 - num % 10) if num % 10 >= 5 else num - num % 10

# def round_sum(a, b, c):
#     return round10(a) + round10(b) + round10(c)

# def close_far(a, b, c):
#     def is_close(x, y):
#         return abs(x - y) <= 1

#     def is_far(x, y, z):
#         return abs(x - y) >= 2 and abs(x - z) >= 2
#     return (is_close(a, b) and is_far(c, a, b)) or (is_close(a, c) and is_far(b, a, c))

# def make_chocolate(small, big, goal):
#     max_big = min(big, goal // 5)
#     remaining = goal - (max_big * 5)
#     if remaining <= small:
#         return remaining
#     return -1 

# def double_char(s):
#     return ''.join([char * 2 for char in s])

# def count_hi(s):
#     return s.count("hi")

# def cat_dog(s):
#     return s.count("cat") == s.count("dog")

# def count_code(s):
#     count = 0
#     for i in range(len(s) - 3):
#         if s[i:i+2] == "co" and s[i+3] == "e":
#             count += 1
#     return count

# def end_other(a, b):
#     a = a.lower()
#     b = b.lower()
#     return a.endswith(b) or b.endswith(a)

# def xyz_there(s):
#     for i in range(len(s) - 2):
#         if s[i:i+3] == "xyz" and (i == 0 or s[i-1] != "."):
#             return True
#     return False

# def count_evens(nums):
#     return sum(1 for num in nums if num % 2 == 0)

# def big_diff(nums):
#     return max(nums) - min(nums)

# def centered_average(nums):
#     nums.sort() 
#     return sum(nums[1:-1]) // (len(nums) - 2)

# def sum13(nums):
#     total = 0
#     i = 0
#     while i < len(nums):
#         if nums[i] == 13:
#             i += 2  
#         else:
#             total += nums[i]
#             i += 1
#     return total

# def sum67(nums):
#     total = 0
#     ignore = False
#     for num in nums:
#         if num == 6:
#             ignore = True 
#         elif num == 7 and ignore:
#             ignore = False  
#         elif not ignore:
#             total += num  
#     return total

# def has22(nums):
#     for i in range(len(nums) - 1):
#         if nums[i] == 2 and nums[i + 1] == 2:
#             return True
#     return False


