import React, {Component} from 'react';

export default class IMC extends Component {
    state = {
        peso: "",
        altura: "",
        mensagem: "Favor inserir seu peso/altura"
    }

    handleInput(e) {
        this.setState ({
            [e.target.id]: e.target.value
        });
    }
    calcular() {
        if(this.state.peso === "" || this.state.altura === "") {
            this.setState({mensagem: "Valores inválidos."});
        } else {
            try {
                const altura = parseFloat(this.state.altura) / 100;
                const peso = parseFloat(this.state.peso);
                var imc = (peso / (altura * altura));
                if(imc < 21) {
                    this.setState({mensagem: "Muito magro."});
                } else if(imc < 24) {
                    this.setState({mensagem: "Magro."});
                } else if(imc < 26) {
                    this.setState({mensagem: "Em forma."});
                } else if(imc < 29) {
                    this.setState({mensagem: "Acima do peso."});
                } else {
                    this.setState({mensagem: "Obesidade."});
                }
            } catch (error) {
                this.setState({mensagem: "Erro na conversão dos valores."});
            }
        }

    }

    render() {
        return (
            <div class="row">
                <div class="col s12">
                    <div class="card">
                        <div class="card-image">
                            <img src="img/topo.jpg"></img>
                            <span class="card-title black-text">LP III - Cálculo de IMC</span>
                        </div>
                        <div class="card-content">
                            <div class="row">
                                <div class="input-field col s5">
                                    <i class="material-icons prefix">monitor_weight</i>
                                    <input id="peso" type="text" class="validate"
                                        onChange={this.handleInput.bind(this)}
                                        value={this.state.peso}
                                    />
                                    <label htmlFor="peso">Peso (KG)</label>
                                </div>
                                <div class="input-field col s5">
                                    <i class="material-icons prefix">height</i>
                                    <input id="altura" type="text" class="validate"
                                        onChange={this.handleInput.bind(this)}
                                        value={this.state.altura}
                                    />
                                    <label htmlFor="altura">Altura (CM)</label>
                                </div>
                                <div class="input-field col s2">
                                    <a class="btn-floating btn-large waves-effect waves-light red"
                                        onClick={this.calcular.bind(this)}
                                    ><i class="material-icons">done</i></a>
                                </div>
                                <div class="col s12">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text center-align">
                                            <h6 id="resultado"><b>
                                                {this.state.mensagem}
                                                </b>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}