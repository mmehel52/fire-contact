import styled from "styled-components";

const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-height: 77vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;

  color: white;
`;
export const FormTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const Title1 = styled.h3`
  background-color: white;
  color: black;
  text-align: center;
  padding: 3px;
  border-radius: 10px;
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
  padding-left: 25px;
  background: url("https://e7.pngegg.com/pngimages/647/460/png-clipart-computer-icons-open-person-family-icon-black-silhouette-black.png")
    no-repeat left;
  background-size: 20px;

  height: 1.5rem;
`;
export const InputPhone = styled.input`
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqdbJtoMohqS8Fan4CAWa4PsEbQvKUp-dhmANDBD98abBrGWsl_dX84OXsYk7lpidSRU&usqp=CAU")
    no-repeat left;
  padding-left: 25px;
  background-size: 20px;
  height: 1.5rem;
`;
export const Selc = styled.select`
  width: 13rem;
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
export const Table = styled.table`
  color: black;
  background-color: white;
  padding: 10px;
  width: 30rem;
  text-align: center;
  td {
    padding: 8px;

    border-bottom: 1px solid #ddd;
  }
`;

export default ContactStyled;
