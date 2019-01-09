import React, {Component} from 'react'
import Header from './Header'
import Gallery from './Gallery'
import Footer from './Footer'


export default class ArtGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='ArtGallery'>
                <Header />
                <Gallery />
                <Footer />
            </div>
        )
    }
}