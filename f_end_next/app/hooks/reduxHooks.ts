import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type {
  AppStateType,
} from '../Redux/reduxStore';

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
