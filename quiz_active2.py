from genericpath import isfile
from tkinter import *
import os

root = Tk()
root.title("제목없음 - Windows 메모장")
root.geometry("640x480") # 가로 * 세로

root.resizable(True, True) # x(너비), y(높이) 값 변경 불가 (창 크기 변경 불가)

# 메뉴
menu = Menu(root)

filename = "mynote.txt"

def open_file() :
    if os.path.isfile(filename):
        with open(filename, "r", encoding="utf8") as file:
            memo.delete("1.0", END)
            memo.insert(END, file.read())

def save_file() :
    with open(filename, "w", encoding="utf8") as file:
        file.write(memo.get("1.0", END))

menu_1 = Menu(menu, tearoff=0)
menu_1.add_command(label="열기(O)", command = open_file)
menu_1.add_command(label="저장(S)", command = save_file)
menu_1.add_separator()
menu_1.add_command(label="끝내기(X)", command = root.quit)
menu.add_cascade(label="파일(F)", menu=menu_1)

menu.add_cascade(label="편집(E)")
menu.add_cascade(label="서식(O)")
menu.add_cascade(label="보기(V)")
menu.add_cascade(label="도움말(H)")

#스크롤바
scroll = Scrollbar(root)
scroll.pack(fill="y", side = "right")

# 본문
memo = Text(root, yscrollcommand=scroll.set)
memo.pack(fill="both", expand = True)

scroll.config(command=memo.yview) #update와 같은 명령문
root.config(menu=menu) #update와 같은 명령문
root.mainloop()