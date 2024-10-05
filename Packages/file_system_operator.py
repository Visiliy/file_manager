import glob
import os


def file_crawling(path: str) -> list:
    list_of_files_and_folders = [os.path.basename(path)]
    list_of_file_names = glob.glob(os.path.join(path, "*"))
    for i in range(len(list_of_file_names)):
        if os.path.isdir(list_of_file_names[i]):
            list_of_files_and_folders.append(
                [*file_crawling(path + "\\" + os.path.basename(list_of_file_names[i]))]
            )
        else:
            list_of_files_and_folders.append(os.path.basename(list_of_file_names[i]))
    return list_of_files_and_folders


class FileSystemOperator:

    def __init__(self):
        pass

    def getting_folder_and_files(self, path: str, showing_files=False, deptj=0) -> list: 
        return file_crawling(path)

    def test_function(self) -> list:
        return [
            ["peckage_1", ["package_1_1", "file_1.png", "fale_2.txt"]],
            ["peckage_2"],
        ]
