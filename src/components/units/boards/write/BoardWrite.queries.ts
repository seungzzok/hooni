import { gql } from "@apollo/client";

// 요청함수에 들어갈 변수 만들기
export const CREATE_BOARD = gql`
  # 변수의 타입 적는 곳
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 실제 우리가 전달할 변수 적는 곳
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`;
