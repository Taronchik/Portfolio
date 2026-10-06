import json                                                 #Меню пользователей и взаимодействие с ними, сначала создаем функции

try:
    with open("users.json", "r") as file:
        users = json.load(file)
except FileNotFoundError:
    users = []

def save_users():
    with open("users.json", "w") as file:
        json.dump(users, file)


def show_menu():
    print('1. Показать пользователей.')
    print('2. Добавить пользователя')
    print('3. Найти пользователя')
    print('4. Удалить пользователя')
    print('5. Изменить возраст пользователя')
    print('6. Изменить имя пользователя')
    print('7. Выход')

def show_users():
    for user in users:
                print(user['name'], user["age"])


def add_user():
    new_name = input("Введите имя нового пользователя: ")
    new_age = int(input("Введите возраст нового пользователя: "))
    new_user = {"name": new_name, "age": new_age}
    users.append(new_user)
    print(users)

    save_users()


def find_user():
    found = False
    poisk = input("Введите имя пользователя которое хотите найти: ")
    for user in users:
        if user["name"] == poisk:
            found = True
            print(user)
    if found == False:
        print("Пользователь не найден")


def delete_user():
    del_name = input("Введите имя пользователя, которого хоите удалить: ")
    found = False
    for user in users:
        if user["name"] == del_name:
            found = True
            users.remove (user)
            print(users)
    if found == False:
        print("Пользователь не найден")

    save_users()


def change_age():
    reage = input("Введите имя пользователя возраст которого ты хочешь изменить: ")
    found = False
    for user in users:
        if user['name'] == reage:
            found = True
            remove_age = int(input("Введите новый возраст: "))
            user["age"] = remove_age
            print(user)
    if found == False:
        print("Пользователь не найден")

    save_users()


def change_name():
    rename = input("Введите имя пользователя имя которого ты хочешь изменить: ")
    found = False
    for user in users:
        if user['name'] == rename:
            found = True
            remove_name = input("Введите новое имя: ")
            user["name"] = remove_name
            print(user)
    if found == False:
        print("Пользователь не найден")

    save_users()


while True:
    show_menu()
    choice = int(input("Выберите действие: "))
    if choice == 1:
        show_users()
    elif choice == 2:
        add_user()
    elif choice == 3:
        find_user()
    elif choice == 4:
        delete_user()
    elif choice == 5:
        change_age()
    elif choice == 6:
        change_name()
    elif choice == 7:
        print('Досвидания!')
        break
    else:
        print("Нет такой команды")
