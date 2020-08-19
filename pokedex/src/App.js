import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreatePokemon from "./components/create-pokemon.component";
import EditPokemon from "./components/edit-pokemon.component";
import PokemonList from "./components/list-pokemon.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-pokemon"} className="nav-link">
                PokeDexV2
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-pokemon"} className="nav-link">
                  Capturar Pokemon
                </Link>
              </Nav>

              {
                /**
                 * <Nav>
                 * <Link to={"/edit-pokemon/:id"} className="nav-link">
                 *    Editar Pokemom
                 *  </Link>
                 * </Nav>
                 */}

                <Nav>
                  <Link to={"/pokemon-list"} className="nav-link">
                    Lista de Pokemons Capturados
                  </Link>
                </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreatePokemon}/>
                <Route path="/create-pokemon" component={CreatePokemon}/>
                <Route path="/edit-pokemon/:id" component={EditPokemon}/>
                <Route path="/pokemon-list" component={PokemonList}/>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
</Router>);
}

export default App;
