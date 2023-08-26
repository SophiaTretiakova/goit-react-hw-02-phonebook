import { styled } from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
`;
