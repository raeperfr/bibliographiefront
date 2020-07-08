import React from 'react';
import './component.css';

export default class Articles extends React.Component {
    render(){
        return(
            <div className="articles">
                <div className="test"><strong>{this.props.auteur}</strong> - <div>{this.props.date}</div> - <div>{this.props.titre}</div> - <div>{this.props.thematique}</div> - <a href={this.props.lien}>Lien vers la page</a></div>
            </div>
        )
    }
}