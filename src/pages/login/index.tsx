import { useState, ReactNode } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import themeConfig from '@/configs/theme/themeConfig'
import BlankLayout from '@/layouts/BlankLayout'
import { Grid } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Visibility, VisibilityOff, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'

const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary
    }
}))

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

interface FormData {
    email: string
    password: string
}

const defaultValues: FormData = {
    password: '',
    email: ''
}

const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState<boolean>(true)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const router = useRouter()

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = () => {
        router.push('/home')
    }

    return (
        <Box className='content-right' >
            <Box
                sx={{
                    p: [6, 12],
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box display={'flex'} flexDirection={'column'} gap={3} justifyContent={'space-between'} sx={{ width: '100%', maxWidth: 400 }}>
                    <Grid display={'flex'} flexDirection={'column'} >
                        <Typography display={'flex'} justifyContent={'center'} sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                            {`${themeConfig.name}`}
                        </Typography>
                        <Typography fontWeight={450} fontSize={24} >SignIn</Typography>
                    </Grid>
                    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                        <Grid display={'flex'} flexDirection={'column'} gap={2}  >
                            <FormControl fullWidth >
                                <Controller
                                    name='email'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <TextField
                                            autoFocus
                                            label='Email'
                                            value={value}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            error={Boolean(errors.email)}
                                            placeholder='example@mail.com'
                                        />
                                    )}
                                />
                                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
                            </FormControl>
                            <FormControl fullWidth >
                                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                                    Password
                                </InputLabel>
                                <Controller
                                    name='password'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange, onBlur } }) => (
                                        <OutlinedInput
                                            value={value}
                                            onBlur={onBlur}
                                            label='Password'
                                            onChange={onChange}
                                            id='auth-login-v2-password'
                                            error={Boolean(errors.password)}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        edge='end'
                                                        onMouseDown={e => e.preventDefault()}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                                        {/* <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} /> */}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    )}
                                />
                                {errors.password && (
                                    <FormHelperText sx={{ color: 'error.main' }} id=''>
                                        {errors.password.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <FormControlLabel
                                    label='Stay signed in'
                                    control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                                />
                                <LinkStyled href='/forgot-password'>Forgot Password?</LinkStyled>
                            </Box>
                            <Button size='large' type='submit' variant='contained' sx={{ width: '35%' }}>
                                Sign-In
                            </Button>
                        </Grid>

                    </form>
                </Box>
            </Box>
        </Box>
    )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage