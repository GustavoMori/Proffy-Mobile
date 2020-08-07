import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://avatars0.githubusercontent.com/u/54715328?s=460&u=53f433753f6cb57a35a14d25e86ac4a1f0e4b932&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gustavo Mori</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Engenheiro de Materiais, aspirante em me tornar um developer Fullstack com NodeJS, ReactJS, e Typescript, para poder contribuir para a comunidade.
        {'\n'}{'\n'}
        Nessa jornada de desenvolvimento pessoal busco amizades e trocas de experiências, até porque, como já dizia o ditado:
        "Se quer ir rápido, vá sozinho. Se quer ir longe, vá em grupo."
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon}/> */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;