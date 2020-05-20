# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
# The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.


def evenFibonacciSum():
    limit = 4000000
    sum = 0
    fibNumber = 1
    prevFibNumber = 0
    while sum < limit:
        tempFib = fibNumber
        fibNumber += prevFibNumber
        prevFibNumber = tempFib
        if fibNumber % 2 == 0:
            sum += fibNumber
    print("Result is: ", sum)
