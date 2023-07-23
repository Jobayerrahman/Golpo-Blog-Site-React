import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
function Blogcounter(props) {
    return (
        <div className='blogcounter-wrapper'>
            <div className='blogcounter-content' style={{backgroundColor: '#4c4747'}}>
                <h1>
                    <CountUp start={0} end={36}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </h1>
                <h4>Total Blog</h4>
            </div>
            <div className='blogcounter-content' style={{backgroundColor: '#687783'}}>
                <h1>
                    <CountUp start={0} end={10}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </h1>
                <h4>History</h4>
            </div>
            <div className='blogcounter-content' style={{backgroundColor: '#35a7a7'}}>
                <h1>
                    <CountUp start={0} end={6}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </h1>
                <h4>Nature</h4>
            </div>
            <div className='blogcounter-content' style={{backgroundColor: '#0c1de5e8'}}>
                <h1>
                    <CountUp start={0} end={8}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </h1>
                <h4>Technology</h4>
            </div>
            <div className='blogcounter-content' style={{backgroundColor: '#1d734b'}}>
                <h1>
                    <CountUp start={0} end={6}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </h1>
                <h4>Health</h4>
            </div>
            <div className='blogcounter-content' style={{backgroundColor: '#e52954'}}>
                <h1>
                    <CountUp start={0} end={6}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </h1>
                <h4>Entertainment</h4>
            </div>
        </div>
    );
}

export default Blogcounter;