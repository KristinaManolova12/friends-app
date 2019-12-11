import React from 'react'
 import './funZone.css'
import InterviewData from './InterviewData'
import FunZoneList from './FunZoneList'
import NavZone from './FunZoneNav'
class Interviews extends React.Component {

      render() {
        return (
          <div className="div-fun-zone">
            <NavZone />
            <div className="bloopers">
               <h2 className="title">F.r.i.e.n.d.s Interviews</h2>
               {InterviewData.map((e) => 
               <FunZoneList key={e.title} title = {e.title} htmlTag={e.htmlTag}/>
               )}

            </div>
          </div>
        )
      }
    }
    



export default Interviews