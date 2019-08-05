import React, { Component } from 'react';

import NoSSR from 'react-no-ssr';

import Layout from '../Layout/Layout';

import Activity from './Activity/Activity';
// import Gallery from './Gallery/Gallery';
import SimpleMap from './Map/Map';
import Person from './Person/Person';
import Timeline from './Timeline/Timeline';
import Video from './Video/Video';

class Architect extends Component {
  constructor(props) {
    super(props);
    const {
      pathContext: {
        node,
      },
    } = props;
    this.data = node;
  }

  render() {
    const {
      name,
      img,
      vita,
      date,
      timelineData,
      videoId,
      work,
    } = this.data;
    return (
      <Layout>
        <div>
          <Person name={name} img={img} vita={vita} date={date} />
          <Timeline timelineData={timelineData} />
          <Activity work={work} />
          <Video videoId={videoId} />
          <NoSSR>
            <SimpleMap work={work} />
          </NoSSR>
        </div>
      </Layout>
    );
  }
}

export default Architect;
