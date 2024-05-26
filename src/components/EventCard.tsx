import React from 'react'
import { Flex, Text, Badge, Icon, Divider, Button } from '@aws-amplify/ui-react';
import { Event } from '../types/Event';  // Import the Event type
import { useNavigate } from 'react-router-dom';
import { StorageImage } from '@aws-amplify/ui-react-storage';
interface EventCardProps {
  event: Event;
}


const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate =  useNavigate()
  const handleClick = () =>{
    navigate('/userform');
  }
  const handleusers = () =>{
    navigate('/userlist');
  }
  console.log(event)
  return (
    <>
    <Flex
      gap="24px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      alignSelf="stretch"
      position="relative"
    >
      <Flex
        gap="0"
        direction="row"
        width="70%"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
      >
        
        <StorageImage alt="Yoga" path='picture-submissions/yoga.jpg' width="30%"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          objectFit="cover"
           />
        <Flex
          gap="24px"
          direction="column"
          width='70%'
          height="448px"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="32px 32px 32px 32px"
          backgroundColor="rgba(255,255,255,1)"
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="block"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
          >
            {event && event.title}
          </Text>
          <Flex
            gap="16px"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
          >
            <Badge
              shrink="0"
              size="small"
             
            >
              {event.date}
            </Badge>
            <Badge
              shrink="0"
              size="small"
             
            >
              {event.city}
            </Badge>
            <Badge
              shrink="0"
              
              size="small"
            >
              {event.time}
            </Badge>
            <Badge
              size="small"
              
            >
              {event.venue}
            </Badge>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            whiteSpace="pre-wrap"
          >
            {event.description}
          </Text>
          <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                whiteSpace="pre-wrap"
              >
                For more information contact at {event.phone} or {event.email}
              </Text>
          <Flex
            gap="16px"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
          >
            <Flex
              width="24px"
              height="24px"
              overflow="hidden"
              shrink="0"
              position="relative"
            >
              <Icon
                width="20.9px"
                height="18.1px"
                viewBox={{"minX":0,"minY":0,"width":20.896038055419922,"height":18.102745056152344}}
                paths={[{"d":"M 8.738018989562988 0.9627439975738525 L 0.2680189311504364 15.102744102478027 C 0.0933869481086731 15.405166864395142 0.0009856600509010605 15.748042941093445 0.000007842128070478793 16.09726333618164 C -0.0009699757947601029 16.446483731269836 0.0895097404718399 16.789873391389847 0.2624454200267792 17.09326934814453 C 0.43538109958171844 17.396665304899216 0.6847444474697113 17.649492144584656 0.9857267141342163 17.826595306396484 C 1.2867089807987213 18.003698468208313 1.6288181841373444 18.098906923551112 1.978018879890442 18.102745056152344 L 18.918018341064453 18.102745056152344 C 19.26721903681755 18.098906923551112 19.609328478574753 18.003698468208313 19.910310745239258 17.826595306396484 C 20.211293011903763 17.649492144584656 20.46065692603588 17.396665304899216 20.63359260559082 17.09326934814453 C 20.80652828514576 16.789873391389847 20.89700824394822 16.446483731269836 20.89603042602539 16.09726333618164 C 20.89505260810256 15.748042941093445 20.802651315927505 15.405166864395142 20.628019332885742 15.102744102478027 L 12.158019065856934 0.9627439975738525 C 11.979748323559761 0.6688503324985504 11.728740692138672 0.4258633702993393 11.429214477539062 0.25722765922546387 C 11.129688262939453 0.08859194815158844 10.791754305362701 0 10.448019027709961 0 C 10.10428375005722 4.440892098500626e-16 9.766349792480469 0.08859194815158844 9.46682357788086 0.25722765922546387 C 9.16729736328125 0.4258633702993393 8.91628973186016 0.6688503324985504 8.738018989562988 0.9627439975738525 Z","fillRule":"nonzero"},{"d":"M8.73802 0.962744 L7.88301 0.444108 L7.88015 0.448873 L8.73802 0.962744 Z M0.268019 15.1027 L-0.589849 14.5889 C-0.592593 14.5935 -0.595301 14.5981 -0.597972 14.6027 L0.268019 15.1027 Z M1.97802 18.1027 L1.96703 19.1027 L1.97802 19.1027 L1.97802 18.1027 Z M18.918 18.1027 L18.918 19.1028 L18.929 19.1027 L18.918 18.1027 Z M20.628 15.1027 L21.494 14.6027 C21.4913 14.5981 21.4886 14.5935 21.4859 14.5889 L20.628 15.1027 Z M12.158 0.962744 L13.0159 0.448865 L13.013 0.444116 L12.158 0.962744 Z M10.448 0 L10.448 -1 L10.448 0 Z M7.88015 0.448873 L-0.589849 14.5889 L1.12589 15.6166 L9.59589 1.47662 L7.88015 0.448873 Z M-0.597972 14.6027 C-0.859919 15.0563 -0.998522 15.5706 -0.999988 16.0945 L1 16.1001 C1.00049 15.9255 1.04669 15.754 1.13401 15.6028 L-0.597972 14.6027 Z M-0.999988 16.0945 C-1.00145 16.6183 -0.865735 17.1334 -0.606332 17.5885 L1.13122 16.5981 C1.04475 16.4464 0.999515 16.2747 1 16.1001 L-0.999988 16.0945 Z M-0.606332 17.5885 C-0.346929 18.0436 0.0271159 18.4228 0.47859 18.6885 L1.49286 16.9647 C1.34237 16.8762 1.21769 16.7498 1.13122 16.5981 L-0.606332 17.5885 Z M0.47859 18.6885 C0.93006 18.9541 1.44322 19.0969 1.96703 19.1027 L1.98901 17.1028 C1.81441 17.1009 1.64336 17.0533 1.49286 16.9647 L0.47859 18.6885 Z M1.97802 19.1027 L18.918 19.1027 L18.918 17.1027 L1.97802 17.1027 L1.97802 19.1027 Z M18.929 19.1027 C19.4528 19.0969 19.966 18.9541 20.4174 18.6885 L19.4032 16.9647 C19.2527 17.0533 19.0816 17.1009 18.907 17.1028 L18.929 19.1027 Z M20.4174 18.6885 C20.8689 18.4228 21.243 18.0436 21.5024 17.5885 L19.7648 16.5981 C19.6783 16.7498 19.5537 16.8762 19.4032 16.9647 L20.4174 18.6885 Z M21.5024 17.5885 C21.7618 17.1334 21.8975 16.6183 21.896 16.0945 L19.896 16.1001 C19.8965 16.2747 19.8513 16.4464 19.7648 16.5981 L21.5024 17.5885 Z M21.896 16.0945 C21.8946 15.5706 21.756 15.0563 21.494 14.6027 L19.762 15.6028 C19.8493 15.754 19.8955 15.9255 19.896 16.1001 L21.896 16.0945 Z M21.4859 14.5889 L13.0159 0.448873 L11.3002 1.47662 L19.7702 15.6166 L21.4859 14.5889 Z M13.013 0.444116 C12.7456 0.00327556 12.3691 -0.361205 11.9198 -0.614159 L10.9386 1.12861 C11.0884 1.21293 11.2139 1.33443 11.303 1.48137 L13.013 0.444116 Z M11.9198 -0.614159 C11.4705 -0.867112 10.9636 -1 10.448 -1 L10.448 1 C10.6199 1 10.7889 1.0443 10.9386 1.12861 L11.9198 -0.614159 Z M10.448 -1 C9.93242 -1 9.42552 -0.867112 8.97623 -0.614159 L9.95742 1.12861 C10.1072 1.0443 10.2762 1 10.448 1 L10.448 -1 Z M8.97623 -0.614159 C8.52694 -0.361205 8.15042 0.00327556 7.88302 0.444116 L9.59302 1.48137 C9.68215 1.33443 9.80766 1.21293 9.95742 1.12861 L8.97623 -0.614159 Z","stroke":"rgba(149,4,4,1)","fillRule":"nonzero","strokeLinejoin":"round","strokeWidth":2},{"d":"M8.73802 0.962744 L0.268019 15.1027 C0.0933869 15.4052 0.00098566 15.748 7.84213e-06 16.0973 C-0.000969976 16.4465 0.0895097 16.7899 0.262445 17.0933 C0.435381 17.3967 0.684744 17.6495 0.985727 17.8266 C1.28671 18.0037 1.62882 18.0989 1.97802 18.1027 L18.918 18.1027 C19.2672 18.0989 19.6093 18.0037 19.9103 17.8266 C20.2113 17.6495 20.4607 17.3967 20.6336 17.0933 C20.8065 16.7899 20.897 16.4465 20.896 16.0973 C20.8951 15.748 20.8027 15.4052 20.628 15.1027 L12.158 0.962744 C11.9797 0.66885 11.7287 0.425863 11.4292 0.257228 C11.1297 0.0885919 10.7918 0 10.448 0 C10.1043 4.44089e-16 9.76635 0.0885919 9.46682 0.257228 C9.1673 0.425863 8.91629 0.66885 8.73802 0.962744 Z","fill":"rgba(149,4,4,1)","fillRule":"nonzero"}]}
                display="block"
                position="absolute"
                top="12.07%"
                bottom="12.5%"
                left="6.47%"
                right="6.47%"
              />
              <Icon
                width="0px"
                height="4px"
                viewBox={{"minX":0,"minY":0,"width":1,"height":4}}
                paths={[{"d":"M 0 0 L 0 4"},{"d":"M1 0 C1 -0.552285 0.552285 -1 0 -1 C-0.552285 -1 -1 -0.552285 -1 0 L1 0 Z M-1 4 C-1 4.55228 -0.552285 5 0 5 C0.552285 5 1 4.55228 1 4 L-1 4 Z M-1 0 L-1 4 L1 4 L1 0 L-1 0 Z","stroke":"rgba(0,0,0,1)","fillRule":"nonzero","strokeLinejoin":"round","strokeWidth":2}]}
                display="block"
                position="absolute"
                top="37.5%"
                bottom="45.83%"
                left="50%"
                right="50%"
              />
              <Icon
                width="0.01px"
                height="0px"
                viewBox={{"minX":0,"minY":0,"width":0.010000228881835937,"height":1}}
                paths={[{"d":"M 0 0 L 0.010000228881835938 0"},{"d":"M0 -1 C-0.552285 -1 -1 -0.552285 -1 0 C-1 0.552285 -0.552285 1 0 1 L0 -1 Z M0.0100002 1 C0.562285 1 1.01 0.552285 1.01 0 C1.01 -0.552285 0.562285 -1 0.0100002 -1 L0.0100002 1 Z M0 1 L0.0100002 1 L0.0100002 -1 L0 -1 L0 1 Z","stroke":"rgba(0,0,0,1)","fillRule":"nonzero","strokeLinejoin":"round","strokeWidth":2}]}
                display="block"
                position="absolute"
                top="70.83%"
                bottom="29.17%"
                left="50%"
                right="49.96%"
              />
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              letterSpacing="0.01px"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              whiteSpace="pre-wrap"
            >
              Participants must bring their yoga mats and comfortable clothing. 
            </Text>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
          />
          <Flex
            gap="32px"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
          >
            <Flex
              gap="16px"
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
            >
              <Flex
                width="24px"
                height="24px"
                overflow="hidden"
                shrink="0"
                position="relative"
              >
                <Icon
                  width="17.59px"
                  height="13.41px"
                  viewBox={{"minX":0,"minY":0,"width":17.59000015258789,"height":13.40999984741211}}
                  paths={[{"d":"M 5.590000152587891 10.579999923706055 L 1.4199998378753662 6.409999847412109 L 0 7.819999694824219 L 5.590000152587891 13.40999984741211 L 17.59000015258789 1.4099998474121094 L 16.18000030517578 0 L 5.590000152587891 10.579999923706055 Z","fillRule":"nonzero"},{"d":"M5.59 10.58 L1.42 6.41 L0 7.82 L5.59 13.41 L17.59 1.41 L16.18 0 L5.59 10.58 Z","fill":"rgba(67,168,84,1)","fillRule":"nonzero"}]}
                  display="block"
                  position="absolute"
                  top="23.29%"
                  bottom="20.83%"
                  left="14.21%"
                  right="12.5%"
                />
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                whiteSpace="pre-wrap"
              >
                Interactive
              </Text>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
            >
              <Flex
                width="24px"
                height="24px"
                overflow="hidden"
                shrink="0"
                position="relative"
              >
                <Icon
                  width="17.59px"
                  height="13.41px"
                  viewBox={{"minX":0,"minY":0,"width":17.59000015258789,"height":13.40999984741211}}
                  paths={[{"d":"M 5.590000152587891 10.579999923706055 L 1.4199998378753662 6.409999847412109 L 0 7.819999694824219 L 5.590000152587891 13.40999984741211 L 17.59000015258789 1.4099998474121094 L 16.18000030517578 0 L 5.590000152587891 10.579999923706055 Z","fillRule":"nonzero"},{"d":"M5.59 10.58 L1.42 6.41 L0 7.82 L5.59 13.41 L17.59 1.41 L16.18 0 L5.59 10.58 Z","fill":"rgba(67,168,84,1)","fillRule":"nonzero"}]}
                  display="block"
                  position="absolute"
                  top="23.29%"
                  bottom="20.83%"
                  left="14.21%"
                  right="12.5%"
                />
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                whiteSpace="pre-wrap"
              >
                Group Workout
              </Text>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
            >
              <Flex
                width="24px"
                height="24px"
                overflow="hidden"
                shrink="0"
                position="relative"
              >
                <Icon
                  width="17.59px"
                  height="13.41px"
                  viewBox={{"minX":0,"minY":0,"width":17.59000015258789,"height":13.40999984741211}}
                  paths={[{"d":"M 5.590000152587891 10.579999923706055 L 1.4199998378753662 6.409999847412109 L 0 7.819999694824219 L 5.590000152587891 13.40999984741211 L 17.59000015258789 1.4099998474121094 L 16.18000030517578 0 L 5.590000152587891 10.579999923706055 Z","fillRule":"nonzero"},{"d":"M5.59 10.58 L1.42 6.41 L0 7.82 L5.59 13.41 L17.59 1.41 L16.18 0 L5.59 10.58 Z","fill":"rgba(67,168,84,1)","fillRule":"nonzero"}]}
                  display="block"
                  position="absolute"
                  top="23.29%"
                  bottom="20.83%"
                  left="14.21%"
                  right="12.5%"
                />
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                whiteSpace="pre-wrap"
              >
                Relaxing
              </Text>
            </Flex>
          </Flex>
          <Flex
              gap="16px"
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
            >
          <Button onClick={handleClick}
          >
            Register
          </Button>
          <Button onClick={handleusers}
          >
            See Members
          </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </>
  )
}

export default EventCard


















