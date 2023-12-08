import colors from '@utils/color';
import {FC} from 'react';
import Icon from 'react-native-vector-icons/Entypo';

interface Props {
  privateIcon: boolean;
}

const PasswordVisibilityIcon: FC<Props> = ({privateIcon}) => {
  return privateIcon ? (
    <Icon name="eye" size={16} color={colors.SECONDARY} />
  ) : (
    <Icon name="eye-with-line" size={16} color={colors.SECONDARY} />
  );
};

export default PasswordVisibilityIcon;
