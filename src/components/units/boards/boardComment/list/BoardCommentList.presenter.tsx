import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardCommentListItem from "../item/BoardCommentListItem";
import { Modal } from "antd";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListItem
          key={el._id}
          el={el}
          onClickDelete={props.onClickDelete}
        />
      ))}
      {props.isModalOpen && (
        <Modal
          title="예시"
          open={true}
          onOk={props.toggleModal}
          onCancel={props.toggleModal}
        >
          <p>예시</p>
        </Modal>
      )}
    </>
  );
}
