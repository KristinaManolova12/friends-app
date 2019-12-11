import React from 'react'
 import './funZone.css'
import data from './data'
import FunZoneList from './FunZoneList'
import NavZone from './FunZoneNav'
class FunZone extends React.Component {

      render() {
        return (
          <div className="div-fun-zone">
            <NavZone />
            <div className="bloopers">
               <h2 className="title">F.r.i.e.n.d.s bloopers</h2>
               {data.map((e) => 
               <FunZoneList key={e.title} title = {e.title} htmlTag={e.htmlTag}/>
               )}

            </div>
          </div>
        )
      }
    }
    



export default FunZone