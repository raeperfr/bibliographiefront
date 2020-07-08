import React from 'react';
import Articles from './component/articles';

export default class Accueil extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles : []
        }
    }

    componentDidMount(){
        fetch('http://192.168.1.15:8080/allarticles')
        .then(response => response.json())
        .then(json => {
            this.setState({articles : json})
            console.log(this.state.articles)
        })
    }

    render(){
        return(
            <div class>
                {this.state.articles.map(item => (
                    <Articles key={item.id} auteur={item.auteur} date={item.date} titre={item.titre} thematique={item.thematique} lien={item.lien} />
                ))}
            </div>
        )
    }
}