import eel

from Packages.file_system_operator import FileSystemOperator


def close_callback(route, websockets):
    if not websockets:
        exit()


@eel.expose
def file_rendering():
    operator = FileSystemOperator()
    return operator.test_function()


def main():
    eel.init("Frontend")
    eel.start(
        "index.html", close_callback=close_callback, cmdline_args=["--start-maximized"]
    )


if __name__ == "__main__":
    main()
