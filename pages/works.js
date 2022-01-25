import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/DojoApp.png'
import thumbWalknote from '../public/images/works/DjEvents.png'
import thumbFourPainters from '../public/images/works/DormPlus.png'
import Paragraph from '../components/paragraph'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
          
        <Section delay={0.2}>
          <WorkGridItem id="inkdrop" title="Dojo App" thumbnail={thumbInkdrop} link='https://thedojo-c5a97.web.app/'>
            <Paragraph> A Platform Management where Team members are able to communicate regarding some tasks as well as assign some tasks to other
        team members for better project development process.</Paragraph>
            <Paragraph> <strong>Tech Stack : </strong> React JS, Redux, Firebase(firestore) and Github Actions</Paragraph>
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="inkdrop" title="Dj Events" thumbnail={thumbWalknote} link="https://github.com/Abhiavati20/dj-events-frontend">
          <Paragraph>Advertising dj and musical events along with complete description and embedded maps for event address.</Paragraph>
          <Paragraph> <strong>Tech Stack : </strong> NEXT JS and STRAPI API</Paragraph>
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.6}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Contribution
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
            <WorkGridItem id="inkdrop" title="DormPlus" thumbnail={thumbFourPainters} link="https://dormplus.herokuapp.com">
                
                <Paragraph>A platform where a hostel resident can register a feedback or an issue into it and a particular warden of the
hostel will be able to look into that issue.</Paragraph>
                <Paragraph> <strong>Tech Stack : </strong> MERN.</Paragraph>
            </WorkGridItem>
        </Section>
      </SimpleGrid>

     
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'