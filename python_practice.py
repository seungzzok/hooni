# 실습 1
print(100 + 200, 100*200, 100/4)
print("python"*3)

# 실습 2
from cgitb import reset
from itertools import count
import keyword
from re import X
print(keyword.kwlist)
print(len(keyword.kwlist))

# 실습 3
a = 100
b = 10.0
c = "python"
d = True
e = 1 + 2j

print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))

f = [1, 2, 3, 4, 5]
g = (1, 2, 3, 4, 5)
h = {1, 2, 3, 4, 5}
i = {"가":1, "나":2, "다":3}

print(type(f))
print(type(g))
print(type(h))
print(type(i))

# 실습 4
height = int(input("키(cm)를 입력하세요: "))
weight = int(input("몸무게(kg)를 입력하세요: "))

bmi = weight / (height/100)**2
print("당신의 BMI지수는 {:.2f}입니다.".format(round(bmi, 2)))

# 실습 5
temperature = int(input("온도를 입력하시오 : "))
running = True

while running:
    tem_class = input("섭씨 or 화씨: ")

    if tem_class == "섭씨":
        temperature *= 33.8
        print("화씨온도는 {}도 입니다.".format(temperature))
        running = False
    elif tem_class == "화씨":
        temperature /= 33.8
        print("섭씨온도는 {}도 입니다.".format(temperature))
        running = False
    else:
        print("잘못입력하였습니다.")

# 실습 6
a = "Life is too short. You need python."

print(a[4:9])
print(a[19:])
print(a[-7])
print(a[::2]) #시작점 마지막점 생략하고 띄워쓰는 값만 입력

# 실습 7
(100==200) and (200>130)
(100==200) or (200>130)

# 실습 8
pen_price = 2000
note_price = 1000
pen_count = int(input("펜의 구매개수를 입력하시오: "))
note_count = int(input("노트의 구매개수를 입력하시오: "))
total_price = pen_price*pen_count + note_price*note_count

if total_price>15000:
    total_price *= 0.9

print("당신의 총 구매금액은 {}원 입니다.".format(total_price))

# 실습 9
shoes_price = 100000
tshirts_price = 50000
shoes_count = int(input("신발의 구매수량을 입력하시오: "))
tshirts_count = int(input("티셔츠의 구매수량을 입력하시오: "))
total_price = shoes_price*shoes_count + tshirts_price*tshirts_count

if total_price<300000:
    total_price *= 0.85
else:
    total_price *= 0.95

print("당신의 총 구매금액은 {}원 입니다.".format(total_price))

# 실습 10
score = int(input("당신의 점수를 입력하시오: "))

if score >= 90:
    grade = "A등급"
elif score >= 80:
    grade = "B등급"
elif score >= 70:
    grade = "C등급"
elif score >= 60:
    grade = "D등급"
else:
    grade = "E등급"

print("당신의 등급은 {}입니다.".format(grade))

# 실습 11
score_a = int(input("A과목의 점수를 입력하시오: "))
score_b = int(input("B과목의 점수를 입력하시오: "))
score_c = int(input("C과목의 점수를 입력하시오: "))

if score_a + score_b + score_c>=180:
    if score_a<40 or score_b<40 or score_c<40 :
        result = "불합격(과락)"
    else:
        result = "합격"
else:
    result ="불합격(총합 미달)"

print("당신의 시험결과는 {}입니다.".format(result))
        
# 실습 12
list_a = [1, 2, 3, 4, 5]
list_b = ["가", "나", "다", "라", "마"]
list_c = [1, 2, 3, ["가", "나", "다"]]

print(list_c[2])
print(list_c[3][1])

# 실습 13
print(list_a + list_b)
print(list_a * 3)

# 실습 14
tuple_a = (1, 2, 3, 4, 5) # 튜플은 원소 변경 불가
tuple_b = ("가", "나", "다", "라", "마")
tuple_c = (1, 2, 3, ["가", "나", "다"])

print(tuple_c[2])
print(tuple_c[3][1])

# 실습 15
print(tuple_a + tuple_b)
print(tuple_a * 3)

# 실습 16
a = list("pythonpython")
b = tuple("pythonpython")
c = set("pythonpython")

print(a)
print(b)
print(c)

a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}

print(a|b)
print(a&b)
print(a-b)

# 실습 17
price = {"새우깡":1000, "감자깡":1500, "고구마깡":2000}
print(price["새우깡"])
print(price.keys())
print(price.values())
print(price.items())

# 실습 18
for i in range(1, 11):
    print(i)

for i in range(0, 11, 2):
    print(i)

# 실습 19
count = int(input("숫자를 입력하세요: "))
for i in range(count):
    print("Hello, Python")

string = ["사과", "딸기", "바나나", "수박", "복숭아"]
for i in string:
    print("저는{}를 좋아합니다.".format(i))

text = input("문자를 입력하세요: ")
for i in text:
    print(i)

for i in range(2, 10):
    for j in range(1, 10):
        print("{0} x {1} = {2}".format(i, j, i*j))

# 실습 20
#1
i = 1
sum = 0
while i <= 100:
    sum += i
    i += 1
print(sum)

#2
i = 1
sum = 0
number = int(input("숫자를 입력하세요: "))
while i <= number:
    sum += i
    i += 1
print(sum)

#3
number = int(input("숫자를 입력하세요: "))
if number%2 == 0:
    print("짝수 입력값 : {}".format(number))
else:
    print("홀수 입력값 : {}".format(number))

#4
j = 0
while True:
    print(i, end='')
    i+=1
    if i == 100:
        break

#5
for i in range(1,100):
    if i%2 == 0:
        continue
    else:
        print(i, end='')
    
# 실습 21
#1
def c_area(radius):
    result = 3.14*(radius**2)
    return result

def circum(radius):
    result = 3.14 * 2 * radius
    return result

radius = int(input("반지름을 입력하시오: "))
print("해당 원의 넓이는 {0}이고 지름은 {1}입니다.".format(c_area(radius), circum(radius)))

#2
def exchange(money):
    dollar = money / 1308.4
    return dollar

money = int(input("원화를 입력하세요 : "))
print("환전할 금액은 {}달러 입니다.".format(round(exchange(money), 2)))

# 실습 22
#1
def dest(d):
    if d == "서울":
        a = 10000
    elif d == "대전":
        a = 8000
    elif d == "대구":
        a = 6000
    elif d == "울산":
        a = 4000
    else:
        a = 2000
    return a

def kinds(k):
    if k == "KTX":
        b = 5000
    elif k == "새마을호":
        b = 4000
    elif k == "무궁화호":
        b = 3000
    else:
        b = 2000
    return b

def seat(s):
    if s == "입석":
        c = 0
    else:
        c = 5000
    return c

def payment(d, k, s):
    a = dest(d)
    b = kinds(k)
    c = seat(s)
    print("총 기차요금은 {}원입니다.".format(a + b + c))

d = input("목적지를 입력하세요: ")
k = input("열차종류를 입력하세요: ")
s = input("좌석종류를 입력하세요: ")

payment(d, k, s)

#2
def coffee(c):
    if c == "아메리카노":
        a = 1000
    elif c == "카페라떼":
        a = 2000
    else:
        a = 3000
    return a

def size(s):
    if s == "스몰":
        b = 500
    elif s == "레귤러":
        b = 600
    else:
        b = 700
    return b

def price(c, s):
    a = coffee(c)
    b = size(s)
    print("음료가격은 {}원입니다.".format(a + b))

c = input("음료종류를 입력하세요.\n(아메리카노, 카페라떼, 카푸치노)\n->")
s = input("음료크기를 입력하세요.\n(스몰, 레귤러, 라지)\n->")
price(c, s)

# 실습 23
import random
number = random.randint(1, 10)

while True:
    guess = int(input("1부터 10사이의 숫자를 입력하시오: "))
    if guess==number:
        print("일치합니다.")
        break
    else:
        print("일치하지 않습니다.")

# 실습 24
alp = "abcdefjhij"
string = random.choice(alp)
print(string)

items = [1, 2, 3, 4, 5]
random.shuffle(items)
print(items)

# 실습 25
import turtle

shape = int(input("몇각형을 그리고 싶은지 숫자로 입력하시오: "))
t = turtle.Turtle()
t.color("skyblue")
t.shape("classic")

t.begin_fill()
for i in range(shape):
    t.forward(100)
    t.right(360 / shape)
t.end_fill()

import turtle
import random

t = turtle.Turtle()

rnd_length = random.randint(1, 101)
rnd_angle = random.randint(0, 361)

t.color("skyblue")
t.shape("classic")

t.begin_fill()
for i in range(20):
    t.forward(rnd_length)
    t.right(rnd_angle)
t.end_fill()

# 실습 26
f = open("python.txt", "w")
f.write("Hello, Python!")
f.close()

f = open("python.txt", "r")
r = f.read()
print(s)
f.close

# 실습 27
lines = ["python\n", 'Swift\n', 'Java\n', 'Kotlin\n']
with open('language.txt', 'w') as file:
    file.writelines(lines)
    
# 실습 28
while True:
    try:
        x = int(input("숫자를 입력하세요: "))
        y = 100 / x
        print(y)
    except:
        print("예외발생. 숫자 0 입력금지")
