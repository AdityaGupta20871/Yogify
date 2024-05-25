import React from "react";
import { Flex, Grid } from "@aws-amplify/ui-react";
import ExerciseCard from "./ExerciseCard";

const ExercisePage: React.FC = () => {
  const exerciseData = [
    {
      title: 'Downward-Facing Dog (Adho Mukha Svanasana)',
      description: 'One of the most recognized yoga poses, downward-facing dog is a foundational pose. Its a great pose for stretching the entire body and is particularly beneficial for runners or those who do a lot of walking or standing.',
      imagePath: 'picture-submissions/downward-facing-dog.jpg',
    },
    {
      title: 'Childs Pose (Balasana)',
      description: 'Child Pose is a restorative pose often used for relaxation and rest between more challenging poses. Its a gentle stretch thats perfect for beginners and can be done anytime you need a break during your practice.',
      imagePath: 'picture-submissions/balasana.jpg',
    },
    {
      title: 'Tree Pose (Vrikshasana)',
      description: 'Pose is a balancing pose that strengthens the legs and core. Its a great pose for beginners to work on their balance as well as focus.',
      imagePath: 'picture-submissions/tree-pose.jpg',
    },
    {
      title: 'Seated Forward Bend (Paschimottanasana)',
      description: 'Forward Bend is a calming pose that stretches the back and legs. Its a great pose for beginners to work on their flexibility. Additionally, it calms the mind and reduces anxiety.',
      imagePath: 'picture-submissions/seated-forward-bend.jpg',
    },
    {
      title: 'Bridge Pose (Setu Bandha Sarvangasana)',
      description: 'Bridge Pose is a backbend pose that strengthens the back and legs and opens the chest and heart. Its a great pose for beginners to start exploring backbends in a safe and accessible way.',
      imagePath: 'picture-submissions/bridge-pose.jpg',
    },
    {
      title: 'Warrior II (Virabhadrasana II)',
      description: 'Warrior II is a standing pose that builds strength and endurance by working on your legs, abs and arms. Its a great pose for beginners to work on their balance and body awareness.',
      imagePath: 'picture-submissions/warrior-2.jpg',
    },
  ];

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding="24px"
      backgroundColor="#f8f8f8"
    >
      <Grid
        templateColumns={{ base: '1fr', medium: '1fr 1fr' }}
        gap="24px"
        width="100%"
        maxWidth="800px"
      >
        {exerciseData.map((exercise, index) => (
          <ExerciseCard
            key={index}
            title={exercise.title}
            description={exercise.description}
            imagePath={exercise.imagePath}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default ExercisePage;
