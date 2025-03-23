# #1
# import math
# a = int(input())
# b = int(input())
# print(math.sqrt(a**2+b**2))

# #2
# a = int(input())
# print("The next number for the number ", a, " is ", a + 1, "\nThe previous number for the number ", a, " is ", a-1, sep="")

# #3
# s = int(input())
# a = int(input())
# print(a//s)

# #4
# s = int(input())
# a = int(input())
# print(a%s)

# #5
# v = int(input())
# t = int(input())
# print( (v * t) % 109)

# #6
# a = int(input())
# b = int(input())
# if a >= b:
#     print(a)
# else:
#     print(b)

# #7
# year = int(input())
# if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
#     print("YES")
# else:
#     print("NO")

# #8
# correct = int(input())
# student = int(input())
# if (correct == 1 and student == 1) or (correct != 1 and student != 1):
#     print("YES")
# else:
#     print("NO")

# #9
# a = int(input())
# if a > 0:
#     print(1)
# elif a == 0:
#     print(0)
# else:
#     print(-1)

# #10
# a = int(input())
# b = int(input())
# if a > b:
#     print(1)
# elif a == b:
#     print(0)
# else:
#     print(2)

# #11
# a = int(input())
# b = int(input())
# for i in range(a, b + 1):
#     if i % 2 == 0:
#         print(i, end=" ")

# #12
# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())
# for i in range(a, b+1):
#     if i % d == c:
#         print(i, end = " ")

# #13
# import math
# a = int(input())
# b = int(input())
# i = math.ceil(math.sqrt(a))
# while i * i <= b:
#     print(i * i, end=' ')
#     i += 1

# #14
# x = input()
# d = input()
# count = 0
# for digit in x:
#     if digit == d:
#         count += 1
# print(count)

# #15
# x = input()
# total = 0
# for digit in x:
#     total += int(digit)
# print(total)

# #16
# x = int(input())
# while x % 10 == 0:
#     x //= 10
# while x > 0:
#     print(x % 10, end='')
#     x //= 10

# #17
# x = int(input())
# for i in range(2, x + 1):
#     if x % i == 0:
#         print(i)
#         break

# #18
# x = int(input())
# for i in range(1, x + 1):
#     if x % i == 0:
#         print(i, end=' ')

# #19
# x = int(input())
# count = 0
# for i in range(1, x + 1):
#     if x % i == 0:
#         count+=1
# print(count)

# #20
# total = 0
# for i in range(100):
#     total += int(input())
# print(total)

# #21
# n = int(input())
# total = 0
# for i in range(n):
#     total += int(input())
# print(total)

# #22
# binary = input()
# decimal = 0
# power = 0
# for digit in reversed(binary):
#     decimal += int(digit) * (2 ** power)
#     power += 1
# print(decimal)

# #23
# n = int(input())
# count = 0
# for i in range(n):
#     num = int(input())
#     if num == 0:
#         count += 1
# print(count)

# #24
# n = int(input())
# i = 1
# while i * i <= n:
#     print(i * i)
#     i += 1

# #25
# n = int(input())
# i = 2
# while i <= n:
#     if n % i == 0:
#         print(i)
#         break
#     i += 1

# #26
# n = int(input())
# power = 1
# while power <= n:
#     print(power, end=' ')
#     power *= 2

# #27
# n = int(input())
# power = 1
# while power < n:
#     power *= 2
# if power == n:
#     print("YES")
# else:
#     print("NO")

# #28
# n = int(input())
# k = 0
# power = 1
# while power < n:
#     power *= 2
#     k += 1
# print(k)

# #29
# n = int(input())
# arr = list(map(int, input().split()))
# for i in range(n):
#     if i % 2 == 0:
#         print(arr[i], end=' ')

# #30
# n = int(input())
# arr = list(map(int, input().split()))
# for x in arr:
#     if x % 2 == 0:
#         print(x, end=' ')

# #31
# n = int(input())
# arr = list(map(int, input().split()))
# count = 0
# for i in range(1, n):
#     if arr[i] > arr[i - 1]:
#         count += 1
# print(count)

# #32
# n = int(input())
# arr = list(map(int, input().split()))
# for i in range(1, n):
#     if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
#         print("YES")
#         break
# else:
#     print("NO")

# #33
# n = int(input())
# arr = list(map(int, input().split()))
# count = 0
# for i in range(1, n - 1):
#     if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
#         count += 1
# print(count)

# #34
# n = int(input())
# arr = list(map(int, input().split()))
# for i in range(n // 2):
#     arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]
# for x in arr:
#     print(x, end=' ')

# #35
# def min_of_four(a, b, c, d):
#     return min(min(a, b), min(c, d))
# a, b, c, d = map(int, input().split())
# print(min_of_four(a, b, c, d))

# #36
# def power(a, n):
#     result = 1.0
#     for _ in range(n):
#         result *= a
#     return result
# a, n = input().split()
# a = float(a)
# n = int(n)
# print(power(a, n))

# #37
# def xor(x, y):
#     return (x and not y) or (not x and y)
# x, y = map(int, input().split())
# x = bool(x)
# y = bool(y)
# print(int(xor(x, y)))


