import 'styled-components';
import {Palette} from '../../styles/palette';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: Palette;
    }
}
