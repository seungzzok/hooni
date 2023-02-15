import type { IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types';
import BoardWrite from "@/src/components/units/boards/write/BoardWrite.container";
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      boardAddress{
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function EditBoardPage() {
  const router = useRouter()
  // 방법 1: 다른 타입이 나타나면 다른 페이지로 이동
  // if (typeof router.query.boardId !== "string"){
  //   router.push("/")
  //   return<></>
  // }

  const { data } = useQuery<
  Pick<IQuery,"fetchBoard">,
  IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: {
      // 방법 2: 받아오는 값의 타입을 지정
      boardId: String(router.query.detail),
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
