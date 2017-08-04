import React, {Component} from 'react';
import Input from './modules/input.js'
import inputs from './_form_inputs.js'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            phone: '',
            mail: '',
            city: ''
        }
    }
    check(e){
        e.preventDefault();
        let data = JSON.stringify(this.state);
        fetch('/check.json', {
                method: 'post',
                headers: new Headers({'content-type': 'application/json'}),
                body: data
                })
            .then((request) => {
                if (response.status != 200) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            })
            .then((request) => {
                alert("Ваш запрос успешно обработан");
            })
            .then()
            .catch((error) => {
                console.log('Request failed', error);
            })
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const Inputs = inputs.map((item) => {
            return (
                <Input name={item.name}
                       label={item.label}
                       key={item.id}
                       onChange={this.handleChange.bind(this)}
                />
            )
        })
        return (
            <form action=""
                  onSubmit={this.check.bind(this)}
            >
                {Inputs}
                <button type="submit">
                    Отправить
                </button>
            </form>
        )
    }
}

export default Form;