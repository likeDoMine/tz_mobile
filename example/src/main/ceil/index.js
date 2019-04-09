import React from 'react'
import './index.less'
import { Header,EasyScroll }  from "../../../../src/index"

export default class Ceil extends React.Component{

    /**
     * 渲染
     */
    render(){
        return <div style={{"height":'100%'}}>
            <Header
                mode="common"
                leftContent={ <div>111</div>}
                leftIcon="white"
                leftClick={()=>{history.back()}}
            ><div style={{"textAlign":'center',"color":'#fff'}}>position: sticky</div></Header>
                <EasyScroll height="90%">
                <dl>
                    <dt>A</dt>
                    <dd>Andrew W.K.</dd>
                    <dd>Apparat</dd>
                    <dd>Arcade Fire</dd>
                    <dd>At The Drive-In</dd>
                    <dd>Aziz Ansari</dd>
                    <dd>Andrew W.K.</dd>
                    <dd>Apparat</dd>
                    <dd>Arcade Fire</dd>
                    <dd>At The Drive-In</dd>
                    <dd>Aziz Ansari</dd>
                </dl>
                <dl>
                    <dt>C</dt>
                    <dd>Chromeo</dd>
                    <dd>Common</dd>
                    <dd>Converge</dd>
                    <dd>Crystal Castles</dd>
                    <dd>Cursive</dd>
                    <dd>Chromeo</dd>
                    <dd>Common</dd>
                    <dd>Converge</dd>
                    <dd>Crystal Castles</dd>
                    <dd>Cursive</dd>
                    <dd>Chromeo</dd>
                    <dd>Common</dd>
                    <dd>Converge</dd>
                    <dd>Crystal Castles</dd>
                    <dd>Cursive</dd>
                    <dd>Chromeo</dd>
                    <dd>Common</dd>
                    <dd>Converge</dd>
                    <dd>Crystal Castles</dd>
                    <dd>Cursive</dd>
                </dl>
                <dl>
                    <dt>E</dt>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                    <dd>Explosions In The Sky</dd>
                </dl>
                <dl>
                    <dt>T</dt>
                    <dd>Ted Leo & The Pharmacists</dd>
                    <dd>T-Pain</dd>
                    <dd>Thrice</dd>
                    <dd>TV On The Radio</dd>
                    <dd>Two Gallants</dd>
                    <dd>Ted Leo & The Pharmacists</dd>
                    <dd>T-Pain</dd>
                    <dd>Thrice</dd>
                    <dd>TV On The Radio</dd>
                    <dd>Two Gallants</dd>
                    <dd>Ted Leo & The Pharmacists</dd>
                    <dd>T-Pain</dd>
                    <dd>Thrice</dd>
                    <dd>TV On The Radio</dd>
                    <dd>Two Gallants</dd>
                    <dd>Ted Leo & The Pharmacists</dd>
                    <dd>T-Pain</dd>
                    <dd>Thrice</dd>
                    <dd>TV On The Radio</dd>
                    <dd>Two Gallants</dd>
                </dl>
                </EasyScroll>
        </div>
    }
}
