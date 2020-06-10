import styled from 'styled-components';
import bunner from '../../assets/bunner.jpg';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Fjalla+One&display=swap');
    .bunner {
        background: url(${bunner}) no-repeat center;
        height: 379px;
        width: 100%;
        margin: 60px 0 0 0;
        padding: 0;
    }
    .advantage {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 110px;
    }
    .post {
        display: flex;
        div {
            margin-left: 10px;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                letter-spacing: 1px;
                color: #666;
            }
            p {
                letter-spacing: 0.5px;
                color: #222;
                font-size: 15px;
                margin-top: 5px;
            }
        }
    }
    .pay {
        display: flex;
        div {
            margin-left: 0;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                letter-spacing: 1px;
                color: #666;
            }
            p {
                letter-spacing: 0.5px;
                color: #222;
                font-size: 15px;
                margin-top: 5px;
            }
        }
    }
    .physical-store {
        display: flex;
        div {
            margin-left: 10px;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                letter-spacing: 1px;
                color: #666;
            }
            p {
                letter-spacing: 0.5px;
                color: #222;
                font-size: 15px;
                margin-top: 5px;
            }
        }
    }
    .exchange {
        display: flex;
        div {
            margin-left: 10px;
            h2 {
                text-transform: uppercase;
                font-size: 18px;
                font-family: Fjalla one;
                letter-spacing: 1px;
                color: #666;
            }
            p {
                letter-spacing: 0.5px;
                color: #222;
                font-size: 15px;
                margin-top: 5px;
            }
        }
    }
    .cards {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;
