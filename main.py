import eel

def close_callback(route, websockets):
    print(route)
    if not websockets:
        exit()

if __name__ == "__main__":
    eel.init("Frontend")
    eel.start("index.html", size=(1900, 1000), close_callback=close_callback)