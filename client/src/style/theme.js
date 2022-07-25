// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { whiten } from  '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,

    colors:{
        primary: "#816797",
        secondary: "#d4d4d4",
        background: "#202023"
    },

    components: {
        Button: {
            // style object for base or default style
            baseStyle: {},
            // styles for different sizes ("sm", "md", "lg")
            sizes: {},
            // styles for different visual variants ("outline", "solid")
            variants: {
                toggle: {
                    bg: "primary",
                    _hover: {
                        bg:whiten("primary",20)
                    }
                }
            },
            // default values for 'size', 'variant' and 'colorScheme'
            defaultProps: {
                size: '',
                variant: '',
                colorScheme: '',
            },
        }
    },


}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme