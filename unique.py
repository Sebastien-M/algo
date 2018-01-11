notUnique = ['a', 'a', 'a', 'aa', 'b', 'd', 'f', 'h', 'mm', 'n', 'o', 'b', 1, 2, 1, 2, 1, 'p', 'z', 'm', 'z']


def checkunique(array):
    to_delete = []
    j = 0
    while j < len(array):
        string = array[j]
        i = 0
        while i < len(array):
            if i == j:
                pass
            elif array[i] == string:
                    to_delete.append(array[i])
            i += 1
        j += 1
    for item in to_delete:
        if item in array:
            array.remove(item)
    print(array)


checkunique(notUnique)
