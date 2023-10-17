import React, { useEffect } from "react";
import { TouchableOpacity, View, Vibration, Text } from "react-native";
import { Container, ButtonStyled, TextStyled } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { verifyPermissions } from "../../services/permissons";

export default function Home(props){
    const navigation = useNavigation()

    useEffect(() => {
        verifyPermissions();
    }, [])

    return (
        <Container>
            <ButtonStyled onPress={() => {
                navigation.navigate('Arquivos')
            }}>
                <TextStyled>Arquivos</TextStyled>
            </ButtonStyled>
        </Container>
    );
}
