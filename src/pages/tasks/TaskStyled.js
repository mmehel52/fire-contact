import styled from "styled-components";

const TaskStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 77vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 40px;
`;
export const FormTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const Title1 = styled.h1`
  background-color: white;
  color: black;
  text-align: center;
  padding: 7px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 10px;
  width: 14rem;
`;
export const Input = styled.input`
  padding-right: 25px;
  background: url("https://w7.pngwing.com/pngs/268/27/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text.png")
    no-repeat right;
  background-size: 20px;

  height: 1.5rem;
`;
export const InputDate = styled.input`
  height: 1.5rem;
`;

export const Btn = styled.button`
  width: 13rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
export const Tasks = styled.div`
  padding: 10px;
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 20rem;
  }
`;
export const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  opacity: 0.7;
`;
export const TaskDate = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Todo = styled.span`
  font-size: 20px;
`;
export const Date = styled.span`
  font-size: 10px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export default TaskStyled;
