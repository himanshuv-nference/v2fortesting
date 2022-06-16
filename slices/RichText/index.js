import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Section from '../../components/Section/Section'

const RichText = ({ slice }) => (
  <Section>
    {slice?.items?.map((item) => (
      <PrismicRichText field={item.richText} />
    ))}
  </Section>
)

export default RichText
