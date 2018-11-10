import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import {Search}  from 'semantic-ui-react';
import axios from 'axios';
class SearchForm extends Component {

    state = {
        query: '',
        loading: false,
        options:[],
        cars: {}
    }


    onSearchChange = (e) => {
        clearTimeout(this.timer);
        this.setState({
            query:e
        });
        this.timer = setTimeout(this.fetchOptions,1000);
    }

    fetchOptions = () => {
        if(!this.state.query) return;
        console.log(this.state.query)
        this.setState({loading:true});
        axios.get(`/api/products/search?car=${this.state.query}`)
            .then(res => res.data.data)
            .then(cars => {
                const options = [];
                const carIDs = [];
                cars.forEach(car => {
									carIDs[car.productID] = car;
									options.push({
											key:car.productID,
											title:car.brand,
											image:car.pictures[0],
											model:car.model,
											description:car.model
									});
							});
							console.log(carIDs)
							console.log(options)
							this.setState({loading:false,options,cars:carIDs});
                
			})
    }

    render() {
        return (
            <Form 
                inline
                style={{marginRight:"10px"}}
            >
            <Search
                loading = {this.state.loading}
                onSearchChange = {e => this.onSearchChange(e.target.value)}
								placeholder = "Search..."
								results={this.state.options}
								onResultSelect ={(e,data) => console.log(e,data)}
								onMouseDown ={(e,data) => console.log(e,data)}
            />
            </Form>)
    }
}

export default SearchForm;