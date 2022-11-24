import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  People,
  CloseOutlined,
  Visibility,
  Apps,
  FileCopy,
  Description,
  Villa,
  AddCircle,
  Home,
  FilterAlt
} from '@mui/icons-material'
import {
  Box,
  Drawer,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  ListSubheader,
  Collapse,
  Divider
} from '@mui/material'

export const NavBar = () => {
  const [drawer, setDrawer] = useState(false)
  const navigate = useNavigate()

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawer(open)
  }

  const [open, setOpen] = useState([false, false, false])

  const MenuList = [
    {
      name: 'Proveedores',
      icon: <People color='info' />,
      subMenu: [
        { name: 'Ver', icon: <Visibility color='primary' />, link: '/provedores' },
        { name: 'Agregar', icon: <AddCircle color='success' />, link: '/provedores/add' }

      ]
    },
    {
      name: 'Materiales',
      icon: <Apps color='success' />,
      subMenu: [
        { name: 'Ver', icon: <Visibility color='primary' />, link: '/materiales' },
        { name: 'Agregar', icon: <AddCircle color='success' />, link: '/materiales/add' }
      ]
    },
    {
      name: 'Notas',
      icon: <FileCopy color='warning' />,
      subMenu: [
        { name: 'Ver', icon: <Visibility color='primary' />, link: '/notas' },
        { name: 'Agregar', icon: <AddCircle color='success' />, link: '/notas/add' },
        { name: 'Filtros', icon: <FilterAlt color='secondary' />, link: '/notas/filter' }
      ]
    },
    {
      name: 'Obras',
      icon: <Villa color='error' />,
      subMenu: [
        { name: 'Ver', icon: <Visibility color='primary' />, link: '/obras' },
        { name: 'Agregar', icon: <AddCircle color='success' />, link: '/obras/add' }
      ]
    },
    {
      name: 'Detalle notas',
      icon: <Description color='primary' />,
      subMenu: [
        { name: 'Ver', icon: <Visibility color='primary' />, link: '/notas/details' },
        { name: 'Agregar', icon: <AddCircle color='success' />, link: '/notas/details/add' }

      ]
    }
  ]

  const handleClickMenu = (index) => {
    setOpen((prev) => {
      const newOpen = [...prev]
      newOpen[index] = !newOpen[index]
      return newOpen
    })
  }

  const handleNavigate = (link) => {
    navigate(link)
    setDrawer(false)
  }

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: '100vh'
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 1rem',
            height: '4.6rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#3f51b5'
          }} component="div" id="nested-list-subheader">
            <Typography variant="h6">Panel de control</Typography>
            <Button onClick={toggleDrawer(false)} color="inherit" >
              <CloseOutlined />
            </Button>
          </ListSubheader>
        }
      >
        <Divider />
        <ListItemButton onClick={() => {
          handleNavigate('/')
          setDrawer(false)
        }}>
          <ListItemIcon>
            <Home style={{ color: '#3f51b5' }} />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemButton>
        {MenuList.map((item, index) => (
          <div key={index}>
            <ListItemButton onClick={() => handleClickMenu(index)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subMenu.map((subItem, subIndex) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={subIndex}
                    onClick={() => handleNavigate(subItem.link)}
                  >
                    <ListItemIcon>
                      {subItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={subItem.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <>
        <AppBar position="static" sx={{
          backgroundColor: '#3f51b5',
          color: 'white',
          height: '3.2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start'
        }}>
          <Toolbar variant="dense">
            <Button onClick={toggleDrawer(true)} color="inherit" >
              <MenuIcon />
            </Button>
            <Typography variant="h6" color="inherit" component="div" >
              Construcciones y proyectos
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={drawer}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </>
    </div>
  )
}
