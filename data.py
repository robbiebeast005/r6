import json


with open('C:\\Users\\Robin\\my-app\\src\\data.json', 'r') as file:
    data = json.load(file)

for x in data:
    print(x)