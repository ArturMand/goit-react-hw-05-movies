import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastText = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const CastContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
