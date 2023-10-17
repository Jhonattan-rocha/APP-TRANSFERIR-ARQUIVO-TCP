import styled from 'styled-components/native';
import * as colors from '../../config/colors'
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ButtonStyled = styled(TouchableOpacity)`
    background-color: ${colors.azulclaro};
    margin: 10px;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextStyled = styled.Text`
    color: white;
    text-align: center;
`;

