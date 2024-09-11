import eel
from tkinter import Tk

root = Tk()
WIDTH = root.winfo_screenwidth()
HEIGHT = root.winfo_screenheight()

def close_callback(route, websockets):
    if not websockets:
        exit()

if __name__ == "__main__":
    eel.init("Frontend")
    eel.start("index.html", size=(WIDTH, HEIGHT), close_callback=close_callback)