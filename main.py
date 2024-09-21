import eel
#ноташа


def close_callback(route, websockets):
    if not websockets:
        exit()


def main():
    eel.init("Frontend")
    eel.start(
        "index.html", close_callback=close_callback, cmdline_args=["--start-maximized"]
    )


if __name__ == "__main__":
    main()
