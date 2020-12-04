import { Component } from 'react'
import Cources from './components/courses'
import Filtter from './components/filter'
export default class App extends Component {
    constructor() {
        super()
        this.Cources=[
            {
                name: 'NodeJS',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus quis orci efficitur venenatis. Suspendisse vel dolor ac mauris dapibus dictum. Mauris vestibulum. '
            },
            {
                name: 'AngularJS',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus quis orci efficitur venenatis. Suspendisse vel dolor ac mauris dapibus dictum. Mauris vestibulum. '
            },
            {
                name: 'Angular2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus quis orci efficitur venenatis. Suspendisse vel dolor ac mauris dapibus dictum. Mauris vestibulum. '
            },
            {
                name: 'ReactJS',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus quis orci efficitur venenatis. Suspendisse vel dolor ac mauris dapibus dictum. Mauris vestibulum. '
            },
            {
                name: 'React native',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus quis orci efficitur venenatis. Suspendisse vel dolor ac mauris dapibus dictum. Mauris vestibulum. '
            },
            {
                name: 'Fultter',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel purus quis orci efficitur venenatis. Suspendisse vel dolor ac mauris dapibus dictum. Mauris vestibulum. '
        },]

        
        this.state = {
            courses : this.Cources
        }

    }

    onSearch=(value)=>{
        this.setState((state)=>{
            state.courses=this.Cources.filter((course)=>{
            return course.name.toLowerCase().includes(value.toLowerCase())
        })
        return state;
        })   
      }

    render() {
        return (
            <div>
                <h2 className="header">Cources</h2>
                
                <Filtter onAdd={this.onSearch}/>
                
                <div className="app" 
                style={
                    {padding:'10px',
                    border:'1px solid midnightblue' ,
                    borderRadius: '7px',
                    width:'55%',
                    margin:'15px auto',
                    }}>

                    
                    <Cources allCources={this.state.courses}/>
                
                </div>
            </div>
        )
    }
}