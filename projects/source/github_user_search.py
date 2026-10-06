import requests

while True: 
    try:
        name = input("Введите GitHub username, если хотите выйти наберите(exit): ")
        if name == "exit":
            break

        response = requests.get(f"https://api.github.com/search/users", params = {"q": name})

        data = response.json()

        print(data.keys())
        print(data["total_count"])
        for i in data["items"]:
                print(i["login"])
        
    except KeyError:
        print("Пользователь не найден")
        continue
    except requests.RequestException:
        print("Ошибка соединения")
        continue
