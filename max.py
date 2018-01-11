import math

numbers = [1, 19, 28, 3, 37, 8, 371, 3, math.pi, 3 * 3 * 3 * 3 * 4, 1002, 1 ^ 10, math.exp(2), math.log(2)]


def py_max(array):
    highest = [array[0]]
    for value in array:
        if highest[0] < value:
            highest[0] = value
    return highest[0]


print py_max(numbers)
