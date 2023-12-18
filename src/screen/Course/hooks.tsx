import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ROUTES} from '../../navigation/routes';

export const CourseHooks = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();

  const onFilterPress = () => {
    navigation.navigate(ROUTES.HOME.FILTER as never);
  }

  return {state, onFilterPress};
};
