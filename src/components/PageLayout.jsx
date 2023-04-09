import styled from 'styled-components';
const PageLayout = ({ children, title }) => {
  return (
    <PageContainer>
      <StTitle>{title}</StTitle>
      {children}
    </PageContainer>
  );
};
export default PageLayout;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const StTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px 0px 48px;
`;
