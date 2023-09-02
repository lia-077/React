import React from 'react'
import CartWidget from './cartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

const navbar = () => {
  return (
    <>

<Flex>
  <Box p='4'>
    Bike Store
  </Box>
  <Spacer />
  <Box p='4'>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Bicicletas</MenuItem>
            <MenuItem>Accesorios</MenuItem>
            <MenuItem>Repuestos</MenuItem>
            <MenuItem>Contacto</MenuItem>
            
          </MenuList>
        </Menu>
  </Box>
  <Spacer/>
  <Box p='4'>
        <CartWidget/>
  </Box>
</Flex>


    </>
  )
}

export default navbar