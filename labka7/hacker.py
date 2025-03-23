# print("Hello, World!")


# n = int(input().strip()) 
# if n % 2 == 1: 
#     print("Weird")
# elif 2 <= n <= 5:
#     print("Not Weird")
# elif 6 <= n <= 20: 
#     print("Weird")
# else: 
#     print("Not Weird")


# a = int(input())
# b = int(input())
# print(a + b, a - b, a * b, sep="\n")


# a = int(input())
# b = int(input())
# print(a//b, a/b, sep="\n")


# n = int(input())
# for i in range (n):
#     print(i*i)
    

# def is_leap(year):
#     leap = False
#     if (year % 4 == 0 and year % 100) != 0 or year % 400 == 0:
#         leap = True
#     return leap
# year = int(input())
# print(is_leap(year))


# n = int(input())
# for i in range(1, n+1):
#     print(i, end="")
    
    

# x = int(input())
# y = int(input())
# z = int(input())
# n = int(input())
# result = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]
# print(result)


# n = int(input())
# arr = list(map(int, input().split()))
# max_score = max(arr) 
# runner_up_list = [score for score in arr if score != max_score]
# runner_up_score = max(runner_up_list)
# print(runner_up_score) 



# students = []
# n = int(input())  
# for _ in range(n): 
#     name = input()
#     grade = float(input())
#     students.append([name, grade])
# sorted_grades = sorted(set([student[1] for student in students]))
# second_lowest_grade = sorted_grades[1]
# second_lowest_students = [student[0] for student in students if student[1] == second_lowest_grade]
# second_lowest_students.sort()
# for name in second_lowest_students:
#     print(name)
    

