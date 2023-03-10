import React, { Component } from 'react';

class ProjectShowcase extends Component {

    static normalStyle = {
        marginTop: "20px", 
        marginBottom: "-20px",
        width: "90%",
        aspectRatio: "16 / 9",
        border: "2px solid white"
    };

    static hoverStyle = {
        marginTop: "20px", 
        marginBottom: "-30px",
        width: "95%",
        aspectRatio: "16 / 9",
        border: "3px solid white"
    };

    constructor(props) {
        super()
        this.state = {
            image: props.image,
            link: props.link,
            text: props.text,
            hover: false
        }
    }

    onMouseEnter() {
        this.setState({ hover: true });
    }

    onMouseExit() {
        this.setState({ hover: false });
    }

    render() {
        return (
            <div>
                <a href={this.state.link}>
                    <div onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseExit()}>
                        <img 
                            style={(this.state.hover) ? ProjectShowcase.hoverStyle : ProjectShowcase.normalStyle} 
                            src={this.state.image} alt="IMAGE_NOT_FOUND" />
                    </div>
                </a>
                <h4 style={{textAlign: "center"}}>{this.state.text}</h4>
            </div>
        );
    }
}

export default class HomePage extends Component {

    state = {
        displayName: "BEN KELCHER",
        displayTitle: "SOFTWARE DEVELOPER"
    }

    render() {
        return (
            <div style={{
                backgroundColor: "midnightblue",
                color: "white",
                padding: "25px"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "30% 70%"
                }}>
                    <div>
                        <h1 style={{fontSize: "70px", lineHeight: "60px", marginBottom: "-15px"}}>{this.state.displayName}</h1>
                        <h4>{this.state.displayTitle}</h4>
                    </div>

                    <div style={{
                        textAlign: "right"
                    }}>
                        <a href="https://www.github.com/benkelcher77"><img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/icons/icons8-github.svg"} alt="Git" /></a>
                        <a href="https://www.linkedin.com/in/benjamin-kelcher-8a256a220/"><img style={{padding: "10px"}} src={process.env.PUBLIC_URL + "/icons/icons8-linkedin-circled.svg"} alt="LinkedIn" /></a>
                    </div>
                </div>

                <div style={{
                    textAlign: "center"
                }}>
                    <h2>ABOUT ME</h2>
                </div>

                <hr />

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "60% 40%"
                }}>
                    <p style={{margin: "auto"}}> 
                        Hi! My name is Ben, and I am a computer science student in my third year at the University of Waterloo.
                        I have always been fascinated by the world of technology and how it can be used to solve complex problems.
                        I am incredibly excited to be a part of such a dynamic and constantly-evolving field!
                    </p>
                    <img src={process.env.PUBLIC_URL + "/images/LinkedinProfilePicture.jpeg"} style={{borderRadius: "50%", margin: "auto", marginTop: "10px"}} />
                </div>

                <div style={{
                    textAlign: "center"
                }}>
                    <h2>TOP PROJECTS</h2>
                </div>

                <hr />

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    textAlign: "center"
                }}>
                    <ProjectShowcase text="Paintball" image={process.env.PUBLIC_URL + "/images/PaintballScreenshot00.png"} link="/projects-paintball/" />
                    <ProjectShowcase text="Terminal File System" image={process.env.PUBLIC_URL + "/images/PaintballScreenshot00.png"} link="/projects-tfs/" />
                    <ProjectShowcase text="Personal Webpage" image={process.env.PUBLIC_URL + "/images/PaintballScreenshot00.png"} link="/projects-personal-website/" />
                </div>
            </div>
        );
    }
}
