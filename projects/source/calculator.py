def show_menu():                                #Калькулятор
    print('1. Сложение')
    print('2. Вычитание')
    print('3. Умножение')
    print('4. Деление')
    print('5. Выход')

def operation(choice, num1, num2):
    if choice == 1:
        return num1 + num2
    elif choice == 2:
        return num1 - num2
    elif choice == 3:
        return num1 * num2
    elif choice == 4:
        if num2 == 0:
            return "На ноль делить нельзя!"
        else:
            return num1 / num2
    else:
        print("Нет такой команды")

while True:
    show_menu()
    choice = int(input("Выберите действие: "))
    if choice == 5:
        print("Досвидания!")
        break
    else:
        try:
            num1 = int(input("Введите первое число: "))
            num2 = int(input("Введите второе число: "))
        except ValueError:
            print("Нужны цифры")
            continue
        result = operation(choice, num1, num2)
        print("Результат: ", result)





