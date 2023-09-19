import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import axios from "axios";

const Login = () => {
  const {isLoading, response, login} = useSubmit();
  const { onOpen } = useAlertContext();
  let formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
    },
    onSubmit: (value) => {
      login(value);

    axios.get("http://localhost:3001/Reservation_guest").then(res => res.json()).then(result => this.setState({
      loading: false,
      users: result
      }))
    },
    validationSchema: Yup.object({
        Name: Yup.string(),
        email: Yup.string()
    }),
  });
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if(response.type === 'success'){
                formik.resetForm();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    const [isinama,setIsinama]=useState()
    const [shownama,setShownama]=useState(isinama)

    const [isiemail,setIsiemail]=useState()
    const [showemail,setShowemail]=useState(isiemail)

    const ketikNama=(event)=>{
      setIsinama(event.target.value);
    }

    const ketikEmail=(event)=>{
      setIsiemail(event.target.value);
    }

    const klikButton=(event)=>{
      setShowemail(isiemail)
      setIsiemail('')
      setShownama(isinama)
      setIsinama('')
    }

    // const [form, setState] = useState({
    //   name: '',
    //   email: ''
    // });

    // const printValues = e => {
    //   e.preventDefault();
    //   console.log(form.name, form.email);
    // };

    // const updateField = e => {
    //   setState({
    //     ...form,
    //     [e.target.name]: e.target.value
    //   });
    // };

  return (
    <Box
      backgroundColor="crimson"
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
    >
        <VStack alignItems="center" width={{base: "95%", md: "50%", lg:"50%"}}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            mt={{ base: "0.5rem", md: '1rem', lg: '2rem'}}
            mb={{ base: "0.5rem", md: '1rem', lg: '1rem'}}
            ml={{ base: "1rem",sm: "1rem", md: "5rem", lg: "7rem" }}
            mr={{ base: "1rem",sm: "1rem", md: "5rem", lg: "7rem" }}
            pb={6}
            zIndex={0}
        >
          <Heading as="h3" p={2} id="Login-section" fontSize={{base: "25px", md: "30px", lg:"34px"}} color="azure">
            Login to check your reservation data
          </Heading>
          <Box p={5} rounded="xl" backgroundColor="azure">
            <form onSubmit={formik.handleSubmit}>
              <HStack display="flex"
                      flexDirection="column"
              >
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.Name && formik.touched.Name}>
                      <FormLabel htmlFor="Name">Name</FormLabel>
                        <Input
                          placeholder="Your name"
                          id="Name"
                          name="Name"
                          {...formik.getFieldProps("Name")}
                          value={isinama}
                          onChange={ketikNama}
                        />
                      <FormErrorMessage>{formik.errors.Name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                      <FormLabel htmlFor="email">email</FormLabel>
                        <Input
                          placeholder="Your email"
                          id="email"
                          name="email"
                          type="email"
                          value={isiemail}
                          onChange={ketikEmail}
                          {...formik.getFieldProps("email")}
                        />
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                    <Button type="login" onClick={klikButton} disabled={!(formik.isValid && formik.dirty)} colorScheme="red" width="full" isLoading={isLoading} loadingText='Logging in'>
                      Login
                    </Button>
                </VStack>
                <Box
                    p={3}
                    shadow='lg'
                    display="grid"
                    columns={{ sm: 2, md: 4 }}
                    w="sm" h="auto"
                    >
                    <Heading fontFamily="Markazi Text" fontSize="xl" color="black">Nama  : {shownama}</Heading>
                    <Heading fontFamily="Markazi Text" fontSize="xl" color="black">email : {showemail}</Heading>
                    <Text mt={0} color="white">{formik.date}</Text>
                </Box>
            </HStack>
          </form>
        </Box>
          <Box>
            <input
              placeholder="Your name"
              value={isinama}
              onChange={ketikNama}
            /><br/>
            <input
              placeholder="Your email"
              value={isiemail}
              onChange={ketikEmail}
            /><br/>
            <Button onClick={klikButton} backgroundColor='yellow'>Login</Button>
            <p>Nama : {shownama}</p>
            <p>email : {showemail}</p>
          </Box>
      </VStack>
    </Box>
  );
};

export default Login;

// class Login extends Component {
//   constructor (props) {
//     super(props);
//     this.state={
//       isinama:'',
//       shownama:''
//     }
//   }

//   ketikNama=(event)=>{
//     this.setState({
//       isinama: event.target.value
//     })
//   }
//   klikButton=(event)=>{
//     event.preventDefault()
//     this.setState({
//       shownama: this.state.isinama,
//       isinama : ''
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form>
//              <input value={this.state.isinama} onChange={this.ketikNama} type="text" name="name" />
//           </form>
//           <Button onClick={this.klikButton} backgroundColor='yellow'>Login</Button>
//           <p> Name: {this.state.shownama}</p>
//       </div>
//     );
//    }
//   }

// export default Login;

// const Login = () => {

//   const [isinama,setIsinama]=useState('')
//   const [shownama,setShownama]=useState(isinama)

//   const ketikNama=(event)=>{
//     setIsinama(event.target.value)
//   }

//   const klikButton=()=>{
//     setShownama(isinama)
//     setIsinama('')
//   }
//   return (
//     <Box
//       backgroundColor="crimson"
//       justifyContent="center"
//       alignItems="flex-start"
//       display="flex"
//     >
//       <VStack alignItems="center" width={{base: "95%", md: "50%", lg:"50%"}}
//         display="flex"
//         justifyContent="center"
//         flexDirection="column"
//         mt={{ base: "0.5rem", md: '1rem', lg: '2rem'}}
//         mb={{ base: "0.5rem", md: '1rem', lg: '1rem'}}
//         ml={{ base: "1rem",sm: "1rem", md: "5rem", lg: "7rem" }}
//         mr={{ base: "1rem",sm: "1rem", md: "5rem", lg: "7rem" }}
//         pb={6}
//         zIndex={0}
//       >
//         <form id="Login-section">
//         <input value={isinama} onChange={ketikNama} type="text" name="name"/>
//         </form>
//         <Button onClick={klikButton} backgroundColor='yellow'>Login</Button>
//         <p> Name: {shownama}</p>
//       </VStack>
//     </Box>
//   )
// }

// export default Login
