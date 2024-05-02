def flattenObject(object, parentName = ''):
    for key in object:
        if (parentName):
            prop = parentName + '.' + key
        else:
            prop = key    

        print(type(object))


object = {
    "a": 1,
    "b": {
        "c": 1,
        "d": 1,
    },
    "e": 12,
}
flattenObject(object);    