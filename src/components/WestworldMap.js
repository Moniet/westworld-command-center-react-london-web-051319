import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = ({ areas, hosts, selectHost, selectedHost }) => {

  return (
    <Segment id="map" >
      {
        areas.map(area => <Area area={ area } hosts={ hosts.filter(host => host.area === area.name && host.active ) } selectHost={ selectHost } selectedHost={ selectedHost }/>)
      }
    </Segment>
  )
}

export default WestworldMap
