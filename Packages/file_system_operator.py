import os

def rec(root):
    s = []
    w = os.listdir(root)
    for i in range(len(w)):
        if os.path.isdir(root + '\\' + w[i]):
            s.append([w[i], rec(root + '\\' + w[i])])
        else:
            s.append(w[i])
    return s


class FileSystemOperator:
    # тут будет логика для работы с файловой системой
    def __init__(self):
        pass
    def getting_folder_and_files(self, root, showing_files=False, deptj=None):
        return rec(root)




    def test_function(self) -> list:
        return [["peckage_1", ["package_1_1", "file_1.png", "fale_2.txt"]], ["peckage_2"]]
