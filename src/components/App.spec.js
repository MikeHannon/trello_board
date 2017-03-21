import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import data from '../../card_data.json'
const WrappedCard = DragDropContext(HTML5Backend)(Card)

test('name of test', () => {
    const component = renderer.create(<WrappedCard {...data.cards[0]}></WrappedCard>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
