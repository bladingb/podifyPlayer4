import AppInput from '@ui/AppInput';
import colors from '@utils/color';
import {useFormikContext} from 'formik';
import {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  name: string;
  value?: string;
  errorMsg?: string;
  placeholder?: string;
  label?: string;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthInputField: FC<Props> = props => {
  const {handleChange, values, errors, touched, handleBlur} = useFormikContext<{
    [key: string]: string;
  }>();

  const {
    label,
    placeholder,
    keyboardType,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
    name,
  } = props;

  const errorMsg = touched[name] && errors[name]? errors[name] : '';

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      </View>
      <AppInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={handleChange(name)}
        value={values[name]}
        onBlur={handleBlur(name)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  label: {
    color: colors.CONTRAST,
  },
  errorMsg: {
    color: colors.ERROR,
  },
});

export default AuthInputField;