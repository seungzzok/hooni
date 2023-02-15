import pygame
import os

pygame.init() #초기화 (반드시 필요)

#화면 크기 설정
screen_width = 640
screen_height = 480
screen = pygame.display.set_mode((screen_width, screen_height))

# 화면 타이틀 설정
pygame.display.set_caption("Hooni Game")

# FPS
clock = pygame.time.Clock()

# 1. 사용자 게임 초기화 (배경 화면, 게임 이미지, 좌표, 속도, 폰트 등)
current_path = os.path.dirname(__file__)
images_path = os.path.join(current_path, "pygame_project", "images")

background = pygame.image.load(os.path.join(images_path, "background.png"))

stage = pygame.image.load(os.path.join(images_path, "stage.png"))
stage_size = stage.get_rect().size
stage_height = stage_size[1]

character = pygame.image.load(os.path.join(images_path, "character.png"))
character_size = character.get_rect().size
character_width = character_size[0]
character_height = character_size[1]
character_x_pos = (screen_width / 2) - (character_width / 2)
character_y_pos = screen_height - character_height - stage_height
character_to_x = 0
character_speed = 8

weapon = pygame.image.load(os.path.join(images_path, "weapon.png"))
weapon_size = weapon.get_rect().size
weapon_width = weapon_size[0]
weapon_height = weapon_size[1]
weapon_speed = 10

weapons = []

ball_image = [
    pygame.image.load(os.path.join(images_path, "balloon1.png")),
    pygame.image.load(os.path.join(images_path, "balloon2.png")),
    pygame.image.load(os.path.join(images_path, "balloon3.png")),
    pygame.image.load(os.path.join(images_path, "balloon4.png"))]

balls = []
ball_speed = [-18, -15, -12, -9]

balls.append({
    "pos_x" : 50,
    "pos_y" : 50,
    "img_idx" : 0,
    "to_x" : 3,
    "to_y" : -6,
    "init_speed" : ball_speed[0]})

ball_remove = -1
weapon_remove = -1

game_font = pygame.font.Font(None, 40)
start_time = pygame.time.get_ticks()
total_time = 30

game_result = "Game Over"

# 이벤트 루프 : 화면이 꺼지지 않기 위해서는 계속 가동되는 이벤트 루프 필요
running = True
while running:
    dt = clock.tick(30)

    # 2. 이벤트 처리 (키보드, 마우스 등)
    for event in pygame.event.get(): #어떤 이벤트가 발생하였는가?
        if event.type == pygame.QUIT: #창이 닫히는 이벤트가 발생하였는가?
            running = False #게임 끝남
        
        # 키보드 작동
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                character_to_x -= character_speed
            
            elif event.key == pygame.K_RIGHT:
                character_to_x += character_speed
            
            elif event.key == pygame.K_SPACE:
                weapon_x_pos = character_x_pos + (character_width / 2) - (weapon_width / 2)
                weapon_y_pos = character_y_pos
                weapons.append([weapon_x_pos, weapon_y_pos])
        
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                character_to_x = 0

    character_x_pos += character_to_x

    
    # 3. 게임 캐릭터 위치 정의
    # 무기 움직이기
    weapons = [[w[0], w[1] - weapon_speed] for w in weapons]

    weapons = [[w[0], w[1]] for w in weapons if w[1] > 0]

    # 공 위치
    for ball_idx, ball_val in enumerate(balls):
        ball_x_pos = ball_val["pos_x"]
        ball_y_pos = ball_val["pos_y"]
        ball_img_idx = ball_val["img_idx"]

        ball_size = ball_image[ball_img_idx].get_rect().size
        ball_width = ball_size[0]
        ball_height = ball_size[1]

        if ball_x_pos <= 0 or ball_x_pos >= (screen_width - ball_width):
            ball_val["to_x"] = ball_val["to_x"] * -1
        
        if ball_y_pos >= screen_height - stage_height - ball_height:  
            ball_val["to_y"] = ball_val["init_speed"]

        else:
            ball_val["to_y"] += 0.6   

        ball_val["pos_x"] += ball_val["to_x"]
        ball_val["pos_y"] += ball_val["to_y"]

    if character_x_pos < 0:
        character_x_pos = 0
        
    if character_x_pos > screen_width - character_width:
        character_x_pos = screen_width - character_width
    
    # 4. 충돌 처리
    character_rect = character.get_rect()
    character_rect.left = character_x_pos
    character_rect.top = character_y_pos

    for ball_idx, ball_val in enumerate(balls):
        ball_x_pos = ball_val["pos_x"]
        ball_y_pos = ball_val["pos_y"]
        ball_img_idx = ball_val["img_idx"]

        ball_rect = ball_image[ball_img_idx].get_rect()
        ball_rect.left = ball_val["pos_x"]
        ball_rect.top = ball_val["pos_y"]

        if character_rect.colliderect(ball_rect):
            running = False
            break
            
        for weapon_idx, weapon_val in enumerate(weapons):
            weapon_rect = weapon.get_rect()
            weapon_rect.left = weapon_x_pos
            weapon_rect.top = weapon_y_pos

            if weapon_rect.colliderect(ball_rect):
                ball_remove = ball_idx
                weapon_remove = weapon_idx

                if ball_img_idx < 3:
                    ball_size = ball_image[ball_img_idx].get_rect().size
                    ball_width = ball_size[0]
                    ball_height = ball_size[1]

                    small_ball_rect = ball_image[ball_img_idx + 1].get_rect().size
                    small_ball_width = small_ball_rect[0]
                    small_ball_height = small_ball_rect[1]

                    balls.append({ #오른쪽
                        "pos_x" : ball_x_pos + ball_width / 2,
                        "pos_y" : ball_y_pos,
                        "img_idx" : ball_img_idx + 1,
                        "to_x" : 3,
                        "to_y" : -6,
                        "init_speed" : ball_speed[ball_img_idx + 1]})
                    
                    balls.append({ #왼쪽
                        "pos_x" : ball_x_pos + ball_width / 2 - small_ball_width,
                        "pos_y" : ball_y_pos + ball_height / 2 - small_ball_height,
                        "img_idx" : ball_img_idx + 1,
                        "to_x" : -3,
                        "to_y" : -6,
                        "init_speed" : ball_speed[ball_img_idx + 1]})
                break
        else:
            continue
        break
    
    if ball_remove > -1:
        del balls[ball_remove]
        ball_remove = -1
    
    if weapon_remove > -1:
        del weapons[weapon_remove]
        weapon_remove = -1

    if len(balls) == 0:
        game_result = "Win"
        running = False

    # 5. 화면에 그리기
    screen.blit(background, (0, 0))

    for weapon_x_pos, weapon_y_pos in weapons:
            screen.blit(weapon,(weapon_x_pos, weapon_y_pos))
    
    for ball_idx, ball_val in enumerate(balls):
        ball_x_pos = ball_val["pos_x"]
        ball_y_pos = ball_val["pos_y"]
        ball_img_idx = ball_val["img_idx"]
        screen.blit(ball_image[ball_img_idx], (ball_x_pos, ball_y_pos)) #순서 중요하게하자. 속임수 개지리네 이거 찾느라고 ㅅㅂ 시간 존나 썼어

    screen.blit(stage, (0, screen_height - stage_height))
    screen.blit(character, (character_x_pos, character_y_pos))

    elasped_time = (pygame.time.get_ticks() - start_time) / 1000
    timer = game_font.render("Time : {0}".format(int(total_time - elasped_time)), True, (255, 255, 255))
    screen.blit(timer, (10, 10))

    if elasped_time > total_time:
        game_result = "Time Over"
        running = False

    pygame.display.update() #괄호 꼭 넣자 진짜 개빡치네

if game_result == "Time Over" or "Win": #이 if문 왜 실행안되는지 ㄹㅇ 모르겠음 진짜 파이썬 개빡침
    msg = game_font.render(game_result, True, (255, 255, 0))
    msg_rect_= msg.get_rect(center=(int(screen_width / 2), int(screen_height / 2))) #center 왜넣어야됨....? 개어이없네
    screen.blit(msg, msg_rect_)
    pygame.display.update() #업데이트 반드시 해줘야됨

    pygame.time.delay(2000) 
else:
    # pygame 종료
    pygame.quit()
