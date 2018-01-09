x = ['a', 'b', 'd', 'f', 'h', 'm', 'n', 'o', 'p', 'z']
y = ['a', 'c', 'e', 'i', 'm', 'r', 's', 't', 'w', 'z']


def add_arrays(arr1, arr2):
    for letter in arr2:
        arr1.append(letter)
    return arr1


def sort_array(arr):
    i = 0
    while i < len(arr) - 1:
        if i == len(arr):
            return arr
        elif arr[i] > arr[i + 1]:
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            i = 0
        else:
            i += 1
    return arr


tab = add_arrays(x, y)
print("{} : {}".format(tab, len(tab)))
tab = sort_array(tab)
print("{} : {}".format(tab, len(tab)))
