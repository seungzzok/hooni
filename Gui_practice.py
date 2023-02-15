from tkinter import *
import tkinter.messagebox as msgbox
import tkinter.ttk as ttk
from tkinter import filedialog
from turtle import width
from PIL import Image
import os

window = Tk()
window.title("Merging Image")

# 파일추가 함수
def add_file():
    image_path = filedialog.askopenfilenames(title="이미지선택", \
        initialdir=r"C:\Users\pc\Desktop\Coding test\Python_활용편\pygame_project\images")

    for img in image_path:
        img_list.insert(END, img)

# 선택삭제 함수
def del_file():
    index = img_list.curselection()

    for img in reversed(index):
        img_list.delete(img)

# 경로설정 함수
def select_file():
    file_path = filedialog.askdirectory(title="파일선택")

    if file_path == '':
        return

    path.delete(0, END)
    path.insert(0, file_path)

# 병합 함수
def merge_img():

    # 가로넓이 설정
    if width_cmb.get() == "원본유지":
        width = -1
    else:
        width = int(width_cmb.get())
    
    # 간격 설정
    if space_cmb.get() == "없음":
        space = 0
    elif space_cmb.get() == "좁게":
        space = 20
    elif space_cmb.get() == "보통":
        space = 40
    else:
        space = 60
    
    # 포맷 설정
    format = "." + str(format_cmb.get().lower())

    # 병합
    images = [Image.open(x) for x in img_list.get(0, END)]
    image_sizes = []

    if width > 0:
        image_sizes = [(width, int(width * x.size[1]/x.size[0])) for x in images] #나눗셈 들어가면 float형태 바뀜
    else:
        image_sizes = [(x.size[0], x.size[1]) for x in images]
    
    img_widths = [x[0] for x in image_sizes]
    img_heigths = [x[1] for x in image_sizes]

    max_width = max(img_widths)
    total_height = sum(img_heigths) + space * (len(images)-1)

    result_img = Image.new("RGB", (max_width, total_height), (255,255,255))
    y_offset = 0

    for idx, img in enumerate(images):
        img = img.resize(image_sizes[idx])

        result_img.paste(img, (int(max_width/2 - img.size[0]/2), y_offset))
        y_offset += (img.size[1] + space)

        progress = (idx + 1) / len(images) * 100
        p_var.set(progress)
        progressbar.update()
    
    save_filename = filename.get() + format
    dest_path = os.path.join(path.get(), save_filename)
    result_img.save(dest_path)
    msgbox.showinfo("알림", "작업이 완료되었습니다")

# 시작 함수
def start():
    if img_list.size() == 0:
        msgbox.showwarning("Error", "이미지를 선택하세요")
        return
    
    if path.get() == '':
        msgbox.showwarning("Error", "경로를 선택하세요")
        return
    
    if width_cmb.get() == '':
        msgbox.showwarning("Error", "가로넓이를 선택하세요")
        return
    
    if space_cmb.get() == '':
        msgbox.showwarning("Error", "간격을 선택하세요")
        return

    if format_cmb.get() == '':
        msgbox.showwarning("Error", "포맷을 선택하세요")
        return    

    merge_img()

# 파일 프레임
file_frame = Frame(window)
file_frame.pack(fill="x", expand = "True", padx=5, pady=5)

add_file_btn = Button(file_frame, text="파일추가", padx=10, pady=5, command=add_file)
add_file_btn.pack(side = "left")

del_file_btn = Button(file_frame, text="선택삭제", padx=10, pady=5, command=del_file)
del_file_btn.pack(side = "right")

# 리스트 프레임
list_frame = Frame(window)
list_frame.pack(fill="x", padx=5, pady=5)

scrollbar = Scrollbar(list_frame)
scrollbar.pack(side="right", fill="y")

img_list = Listbox(list_frame, height=15, selectmode="extended", yscrollcommand=scrollbar.set)
img_list.pack(side="left", fill="x", expand=True)
scrollbar.config(command=img_list.yview)

# 경로 프레임
path_name_frame = Frame(window)
path_name_frame.pack(fill="x", expand="True", padx=5, pady=5)

path_frame = LabelFrame(path_name_frame, text="저장경로")
path_frame.pack(fill="x", expand="True", side="left")

path = Entry(path_frame)
path.pack(side="left", fill="x", expand="True", padx=5, pady=5)

find_path = Button(path_frame, text="찾아보기", padx=3, pady=1, command=select_file)
find_path.pack(side="right", padx=5, pady=5)

# 이름 프레임
name_frame = LabelFrame(path_name_frame, text="파일이름", pady=4)
name_frame.pack(fill="x", expand="True", side="right", padx=5)

filename = Entry(name_frame)
filename.pack(fill="x", expand="True", padx=5, pady=5)

# 옵션 프레임
option_frame = LabelFrame(window, text="옵션")
option_frame.pack(fill="x", padx=5, pady=5)

# 가로넓이
width_lbl = Label(option_frame, text="가로넓이")
width_lbl.pack(side="left", padx=5, pady=5)

width_opt = ["원본유지", "1024", "800", "640"]
width_cmb = ttk.Combobox(option_frame, state="readonly", value=width_opt, width=10)
width_cmb.current(None)
width_cmb.pack(side="left", padx=5, pady=5)

# 간격
space_lbl = Label(option_frame, text="간격", padx=8)
space_lbl.pack(side="left", padx=5, pady=5)

space_opt = ["없음", "좁게", "보통", "넓게"]
space_cmb = ttk.Combobox(option_frame, state="readonly", value=space_opt, width=10)
space_cmb.current(None)
space_cmb.pack(side="left", padx=5, pady=5)

# 포맷
format_lbl = Label(option_frame, text="포맷", padx=8)
format_lbl.pack(side="left", padx=5, pady=5)

format_opt = ["PNG", "JPG", "BMP"]
format_cmb = ttk.Combobox(option_frame, state="readonly", value=format_opt, width=10)
format_cmb.current(None)
format_cmb.pack(side="left", padx=5, pady=5)

# 진행상황 프레임
progress_frame = LabelFrame(window, text="진행상황")
progress_frame.pack(fill="x", padx=5, pady=5)

p_var = DoubleVar()
progressbar = ttk.Progressbar(progress_frame, maximum=100, variable=p_var)
progressbar.pack(fill="x", padx=5, pady=5)

# 시작, 닫기
play_frame = Frame(window)
play_frame.pack(fill="x", padx=5, pady=5)

close_btn = Button(play_frame, text="닫기", padx=20, pady=5, command = window.quit)
close_btn.pack(side="right")

start_btn = Button(play_frame, text="시작", padx=20, pady=5, command = start)
start_btn.pack(side="right", padx=8)

window.resizable(False, False)
window.mainloop()