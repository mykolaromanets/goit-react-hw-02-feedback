import styled from 'styled-components';
export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;
  padding: 0;
`;

export const OptionsItem = styled.li``;

export const Button = styled.button`
  cursor: pointer;

  border-radius: 5px;
  padding: 0.25em 1em;
  width: 100px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #000000;
  border: none;
  :hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }
`;
