import React, { useState, useEffect, useCallback, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Loading from '../../components/Loading'

import * as FlowService from '../../services/FlowService'

import {
  FlowTitle,
  Container,
  Content,
  Card,
  CardContainer,
  Section,
  NextArrow,
  FieldLabel,
  Button,
} from './styles'

function Dashboard() {
  const history = useHistory()
  const [flows, setFlows] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getFields = async (screens) => {
    const requestFields = await Promise.all(
      screens.map(async (screen) => {
        const {
          data: [{ itens }],
        } = await FlowService.getScreenFields(screen.id)
        return {
          ...screen,
          fields: itens,
        }
      })
    )
    return requestFields
  }

  const getScreens = useCallback(async (flowID) => {
    const screenList = await FlowService.getFlowScreens(flowID)
    const screenListWithFields = await getFields(screenList.data)
    return screenListWithFields
  }, [])

  const getFlows = useCallback(async () => {
    const flowsList = await FlowService.getFlows()
    return flowsList
  }, [])

  const makeFlowData = useCallback(async () => {
    const { data: flowsList } = await getFlows()

    const screensList = await Promise.all(
      flowsList.map(async (flowItem) => {
        const screen = await getScreens(flowItem.id)
        return {
          ...flowItem,
          screens: screen,
        }
      })
    )

    setFlows(screensList)
    setLoading(false)
  }, [getScreens, getFlows])

  useEffect(() => {
    makeFlowData()
  }, [makeFlowData])

  const handleClick = (path) => {
    history.push(path)
  }

  const getInitialScreen = (screens) => {
    const initialScreen = screens.find((screen) => screen.initial)

    if (initialScreen) {
      return initialScreen.route
    }

    return '/'
  }

  const uniqueKeyGenerate = () => {
    return Math.floor(Math.random() * 2000)
  }

  const renderScreensFields = (fields) => {
    return fields.map((field) => (
      <FieldLabel key={uniqueKeyGenerate()}>{field.label}</FieldLabel>
    ))
  }

  const renderScreenItems = (screens) => {
    if (!screens) {
      return <Card />
    }

    const screenItems = screens.map((screen) => {
      const { fields } = screen

      return (
        <Card
          key={uniqueKeyGenerate()}
          direction="column"
          bgColor={screen.color}
        >
          {renderScreensFields(fields)}
        </Card>
      )
    })
    const intialScreen = getInitialScreen(screens)

    return (
      <>
        <CardContainer>{screenItems}</CardContainer>
        <Button onClick={() => handleClick(intialScreen)}>Go to flow</Button>
      </>
    )
  }

  const renderFlowScreens = ({ screens, cardColor }) => {
    if (!screens) {
      return <Section />
    }

    const flowScreens = screens.map((screen) => (
      <Section key={uniqueKeyGenerate()} bgColor={screen.color}>
        {screen.screenName}
      </Section>
    ))

    return (
      <>
        <Card borderColor={cardColor}>{flowScreens}</Card>
        <NextArrow />
        {renderScreenItems(screens)}
      </>
    )
  }

  const renderFlowStructure = (flowsList) => {
    if (isLoading) {
      return <Loading />
    }

    return flowsList.map((flowItem) => {
      const { screens } = flowItem
      return (
        <Fragment key={uniqueKeyGenerate()}>
          <FlowTitle>{flowItem.name}</FlowTitle>
          <Content>
            <Card bgColor={flowItem.color}>
              <Section bgColor={flowItem.color}>{flowItem.name}</Section>
            </Card>
            <NextArrow />
            {renderFlowScreens({ screens, cardColor: flowItem.color })}
          </Content>
        </Fragment>
      )
    })
  }

  return (
    <>
      <Container>{renderFlowStructure(flows)}</Container>
    </>
    // <Section bgColor="#264653">Screen 1</Section>
    // <Section bgColor="#2a9d8f">Screen 2</Section>
    // <Section bgColor="#e9c46a">Screen 3</Section>
    // <Section bgColor="#f4a261">Screen 4</Section>
    // <Section bgColor="#e76f51">Screen 5</Section>
    // <Section bgColor="#028090">Screen 6</Section>
  )
}

export default Dashboard
