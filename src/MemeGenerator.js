import React from 'react';

class MemeGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl: "",
            allImgUrl:[]
        }
    }

    componentDidMount() {
        const randNumb = Math.floor(Math.random() * 100) + 1;
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(imgUrls => {
                this.setState({
                    allImgUrl: imgUrls.data.memes,
                    imgUrl: imgUrls.data.memes[randNumb].url
                });
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit=(event) => {
        event.preventDefault();
        const randNumb = Math.floor(Math.random() * 100) + 1;
        this.setState({
            imgUrl: this.state.allImgUrl[randNumb].url
        });
    }


    render() {
        return (
            <div style={{ margin: 'auto', width: '35%' }}>
                <form onSubmit={this.handleSubmit}>
                    <input style={{ marginLeft: 20 }} type="text" onChange={this.handleChange} name="topText" />
                    <input style={{ marginLeft: 10 }} type="text" onChange={this.handleChange} name="bottomText" />
                    <input style={{ marginLeft: 10 }} type="Submit" value="Generate" />
                </form>
                <br />
                <img src={this.state.imgUrl} alt="memeImg"
                    style={{ height: 400, width: 500 }}></img>

                <div style={{
                    marginTop: -380,
                    color: 'white',
                    marginLeft: 90,
                    fontSize: '2em',
                    fontWeight: 'bolder',
                    position: 'absolute'
                }}>{this.state.topText}</div>

                <div style={{
                    marginTop: -65,
                    color: 'white',
                    marginLeft: 100,
                    fontSize: '2em',
                }}>{this.state.bottomText}</div>
            </div>
        );
    }
}

export default MemeGenerator;