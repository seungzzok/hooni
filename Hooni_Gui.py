import tkinter.messagebox as msgbox
from tkinter import *
from tkinter import filedialog
import tkinter.ttk as ttk
import os
from PIL import Image


root = Tk()
root.title("Hooni Gui")

def add_file():
    files = filedialog.askopenfilenames(title="이미지 선택", filetypes=(("png파일", "*.png"),("모든파일","*.*")), \
        initialdir = r"C:\Users\pc\Desktop\Coding test\Python_활용편\pygame_project\images")

    for file in files:
        select_list.insert(END, file)

def del_file():
    for index in reversed(select_list.curselection()):
        select_list.delete(index)

def save_path():
    folder_selected = filedialog.askdirectory()
    if folder_selected == '':
        return
    path.delete(0, END)
    path.insert(0, folder_selected)

def merge_image():

    try:
        # 가로넓이
        img_width = widht_cmb.get()
        if img_width == "원본유지" :
            img_width = -1
        else:
            img_width = int(img_width)

        # 간격
        img_space = space_cmb.get()
        if img_space == "없음":
            img_space = 0
        elif img_space == "좁게":
            img_space = 30
        elif img_space == "보통":
            img_space = 60
        else:
            img_space = 90

        # 포맷
        img_format = format_cmb.get().lower()

        images = [Image.open(x) for x in select_list.get(0, END)]

        image_sizes = []

        if img_width > -1:
            image_sizes = [(int(img_width), int(img_width * x.size[1] / x.size[0])) for x in images]
        else:
            image_sizes = [(x.size[0], x.size[1]) for x in images]

        widths = [x[0] for x in image_sizes]
        heights = [x[1] for x in image_sizes]
        max_widht, total_height = max(widths), sum(heights)

        result_img = Image.new("RGB", (max_widht, total_height + (img_space * (len(images)-1))), (255, 255, 255))
        y_offset = 0

        for idx, img in enumerate(images):
            if img_width > -1:
                img = img.resize(image_sizes[idx])

            result_img.paste(img, (0, y_offset))
            y_offset += img.size[1] + img_space

            progress = (idx + 1) / len(images) * 100
            p_var.set(progress)
            progressbar.update()

        file_name = "Hooni_Gui." + img_format
        dest_path = os.path.join(path.get(), file_name)
        result_img.save(dest_path)
        msgbox.showinfo("알림", "작업이 완료되었습니다")
    except Exception as err:
        msgbox.showerror("에러", err)

def start():
    if select_list.size() == 0:
        msgbox.showwarning("경고", "이미지를 추가하세요")
        return
    
    if len(path.get()) == 0:
        msgbox.showwarning("경고", "저장경로를 설정하세요")
        return

    merge_image()

# 파일 프레임
file_frame = Frame(root)
file_frame.pack(fill="x", padx=5, pady=5)

file_add = Button(file_frame, text="파일추가", width=10, padx=5, pady=5, command=add_file)
file_add.pack(side = "left")

file_delete = Button(file_frame, text="선택삭제", width=10, padx=5, pady=5, command=del_file)
file_delete.pack(side = "right")

# 리스트 프레임
list_frame = Frame(root)
list_frame.pack(fill="x", expand=True, padx=5, pady=5)

scrollbar = Scrollbar(list_frame)
scrollbar.pack(side="right", fill="y")

select_list = Listbox(list_frame, height = 15, selectmode="extended", yscrollcommand=scrollbar.set)
select_list.pack(side="left", fill="x", expand=True)
scrollbar.config(command=select_list.yview)

# 저장경로 프레임
path_frame = LabelFrame(root, text="저장경로")
path_frame.pack(fill="x", padx=5, pady=5)

path = Entry(path_frame)
path.pack(side="left", fill="x", expand=True, ipady=4, padx=5, pady=5)

path_search = Button(path_frame, text="찾아보기", padx=4, pady=4, command=save_path)
path_search.pack(side="right", padx=5, pady=5)

# 옵션 프레임
option_frame = LabelFrame(root, text="옵션")
option_frame.pack(padx=5, pady=5)

# 가로넓이
width_label = Label(option_frame, text="가로넓이", width=8)
width_label.pack(side="left")

widht_opt = ["원본유지", "1024", "800", "640"]
widht_cmb = ttk.Combobox(option_frame, state = "readonly", values=widht_opt, width=10)
widht_cmb.current(0)
widht_cmb.pack(side="left", padx=5, pady=5)

# 간격
space_label = Label(option_frame, text="간격", width=8)
space_label.pack(side="left")

space_opt = ["없음", "좁게", "보통", "넓게"]
space_cmb = ttk.Combobox(option_frame, state = "readonly", values=space_opt, width=10)
space_cmb.current(0)
space_cmb.pack(side="left", padx=5, pady=5)

# 포맷
format_label = Label(option_frame, text="포맷", width=8)
format_label.pack(side="left")

format_opt = ["PNG", "JPG", "BMP"]
format_cmb = ttk.Combobox(option_frame, state = "readonly", values=format_opt, width=10)
format_cmb.current(0)
format_cmb.pack(side="left", padx=5, pady=5)

# 진행상황 프레임
progress_frame = LabelFrame(root, text="진행상황")
progress_frame.pack(fill="x", padx=5, pady=5)

p_var = DoubleVar()
progressbar = ttk.Progressbar(progress_frame, maximum=100, variable=p_var)
progressbar.pack(fill="x", padx=5, pady=5)

# 실행 프레임
run_frame = Frame(root)
run_frame.pack(fill="x", padx=5, pady=5)

close = Button(run_frame, text="닫기", width=10, padx=5, pady=5, command=root.quit)
close.pack(side="right")

start = Button(run_frame, text="시작", width=10, padx=5, pady=5, command=start)
start.pack(side="right", padx= 8)

root.resizable(False, False)
root.mainloop()