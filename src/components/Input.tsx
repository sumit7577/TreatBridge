import styled from 'styled-components';
import Block from './Block';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    left?: React.ReactNode,
    right?: React.ReactNode,
    classname?: string
}

const InputComponent = (props: InputProps) => {
    const { left, right, classname } = props;
    return (
        <Block className={`bg-white rounded-lg shadow-md px-5 ${classname}`}>
            {left}
            <Input {...props} />
            {right}
        </Block>
    )

}


const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.8rem;
  &:focus {
    outline: none;
  }
`;

export default InputComponent