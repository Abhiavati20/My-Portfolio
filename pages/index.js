import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio'
import { IoMail,IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I&apos;m a Full Stack Web Developer based in India!
            </Box>
            <Box display={{ md: 'flex', }} >
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" fontSize={40}  textDecoration='underline #525252'>Abhishek Avati</Heading>
                    <p>(Artist/Developer/Sportsmen)</p>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"

                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/abhishek.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>
            <br/>
            <hr/>
            <br/>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" fontSize={25} textDecoration='underline #525252'>
                    Work
                </Heading>
                <Paragraph>
                    Currently I am a third year student pursuing bachelor&apos;s degree in
                    Information Technology from Pune,India. I am a full stack web developer
                    as well as having keen intreset in blockchain and want to explore Web 3.0.
                    I spend most of my time in coding scalable projects.
                    You can also view my profile on {' '}
                    <NextLink  href="https://github.com/Abhiavati20">
                        <Link>Github</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My projects / Works
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <br/>
            <hr/>
            <br/>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" fontSize={25} textDecoration='underline #525252'>
                    Experience
                </Heading>
                <BioSection>
                    <BioYear>Dec,2021 - Jan,2022</BioYear>
                    <Paragraph>
                        <strong>Full Stack Developer Intern</strong> at {' '}
                        <NextLink href="https://knockonce.in/">
                            <Link >KnockOnce</Link>
                        </NextLink>.
                    </Paragraph>
                    
                    <Paragraph>
                        <strong>Responsibility: </strong>To build a web application for one of their Clients. Writing Clean UI components and focused on writing good readable code for backend servers and routes.
                    </Paragraph>
                    <Paragraph>
                        <strong>Technical Stack : </strong> MERN.
                    </Paragraph>
                    <Paragraph>
                        <strong>Impact : </strong> Build a web application which met most of the requirements of the client. Which eventually gave a positive impact on the relationship between Client and Organization.
                    </Paragraph>

                </BioSection>
            </Section>
            <br/>
            <hr/>
            <br/>
            <Section delay={0.4}>
                <Heading as="h3"  variant="section-title" fontSize={25} textDecoration='underline #525252'>
                    Skills
                </Heading>
                <BioSection>
                    <BioYear>Languages : </BioYear>
                    C, C++, JavaScript
                </BioSection>
                <BioSection>
                    <BioYear>Libraries : </BioYear>
                    ReactJs, Redux, ChakraUI, Styled-Components, React-Context-API, Tailwind CSS .
                </BioSection>
                <BioSection>
                    <BioYear>FrameWork : </BioYear>
                    Express JS, Next JS, Django .
                </BioSection>
                <BioSection>
                    <BioYear>Database : </BioYear>
                    MongoDB, MySql, PostgreSql . 
                </BioSection>
            </Section>
            <br/>
            <hr/>
            <br/>
            
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title" fontSize={25}  textDecoration='underline #525252'>
                    I ♥
                </Heading>
                <Paragraph>
                    Playing Badminton, Playing Tabla, Photography.
                </Paragraph>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Contact Me : 
                </Heading>
                <List>
                    <ListItem>
                        <Link href="mailto:abhishekaa1112@gmail.com" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoMail} />}
                            >
                                abhishekaa1112@gmail.com
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/Abhiavati20" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                Abhiavati20
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/abhishekavati/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                Abhishek Avati
                            </Button>
                        </Link>
                    </ListItem>
                    
                </List>
            </Section>
        </Container>
    )
}
export default Page;