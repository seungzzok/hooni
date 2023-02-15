import styled from '@emotion/styled';
import type { IPageProps } from './pagination.types';

export const PaginationWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.button`
  margin: 0px 5px;
  padding: 3px 5px;
  width: 38px;

  font-style: normal;
  text-decoration: ${(props: IPageProps) => (props.isActive ? "underline": "none")};;
  font-weight: ${(props: IPageProps) => (props.isActive ? "600": "400")};;
  font-size: 16px;
  line-height: 1;
  color: ${(props: IPageProps) => (props.isActive ? "#FFD600": "black")};
  text-align: center;
`;

export const SwitchBtn = styled.img`
  margin: 0px 10px;
  padding: 3px;
  cursor: pointer;
`;