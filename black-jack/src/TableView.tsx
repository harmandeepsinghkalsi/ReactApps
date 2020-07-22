import React, { useState } from 'react';
import './TableView.css';
import {BlackJack} from './BlackJack';
import {DialogComponent} from './DialogComponent';
import { Notifications } from './Notifications';

let blackJack = new BlackJack();


export const TableView: React.FC = () => {

    const [deck, updateDeck] = useState(blackJack.deck);
    const [coins, updateCoins] = useState(45);
    const [bet, updateBet] = useState(1);
    const [gamesOn, updateGameOn] = useState(false);
    const [notification, updateNotification] = useState(blackJack.notification);
    const [dealer, updateDealer] = useState(blackJack.dealer);
    const [player, updatePlayer] = useState(blackJack.player);
    const [standClicked, updateStandClicked]  = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [placeBetClicked, updatePlaceBetClicked] = useState(false);
  
    function handleDialogOpen() {
      updateGameOn(false);
      setOpenDialog(true);
    };
  
    function handleDialogClose() {
      setOpenDialog(false);
      updateGameOn(false);
      blackJack = new BlackJack();
      updateDeck(blackJack.deck);
      updateBet(1);
      updateNotification('');
      updateDealer(blackJack.dealer);
      updatePlayer(blackJack.player);
      updateStandClicked(false);
      let tempNum = 0;
      if(Notifications.PUSH) {
        console.log(typeof(coins));
        console.log(typeof(bet));
        console.log(coins+bet);
        tempNum = coins+bet;
      } else if(Notifications.PLAYER_BLACKJACK||Notifications.PLAYER_WINS || Notifications.DEALER_BUST) {
        console.log(coins+bet+bet);
        tempNum = coins+bet+bet;
      } else if(Notifications.DEALER_WINS || Notifications.DEALER_BLACKJACK || Notifications.PLAYER_BUST) {
        console.log(coins);
        tempNum = coins;
      }
      updateCoins(tempNum);
    };

    function startGame() {
        updateGameOn(true);
        const playerObj = blackJack.startNewGame();
        if(playerObj.notification!==''){
            updateStandClicked(true);
            updateNotification(playerObj.notification);
            handleDialogOpen();
        }
    }

    function hit() {
        const message = blackJack.hit();
        updatePlayer({...blackJack.player});
        if(message!==''){
            updateStandClicked(true);
            updateNotification(message);
            handleDialogOpen();
            
        }
    }

    function stay() {
        updateStandClicked(true);
        const message = blackJack.stand();
        updateDealer({...blackJack.dealer});
        if(message!==''){
            updateNotification(message);
            handleDialogOpen();
        }
    }

    function setBet(event: any) {
        
        const num = event.target.value;
        const re = /^[0-9\b]+$/;
        if(num === '' || re.test(num)) {
            updateBet(num);
            updatePlaceBetClicked(false);
        } 
    }

    function placeBet() {
        if(coins<bet){
            updateNotification('Insufficient coins to play!');
        } else {
        updateCoins(coins-bet);
        updatePlaceBetClicked(true);
        // updateBet(1);
        }
    }
    
    return (
    <div>
            <DialogComponent message={notification} openDialog = {openDialog} onCloseDialog={handleDialogClose} ></DialogComponent>
            <div className="TableHeader">
                <span className="TableName">GODFATHER</span>
                <div style={{float: "right"}}>
                    <span style={{marginRight: "50px"}}>${coins}</span>
                </div>
            </div>
            <div className="Container">
            <div style={{height:"30vh"}}>
            <p>Dealer's Hand ({(!standClicked && dealer.cards[0]!==undefined)? dealer.cards[0]['value'] : dealer.points })</p>
            <table>
                <tbody>
                <tr>
                { dealer.cards.map((card, i) => {
                return <td className="Cards" key={i} >{( i===1 && !standClicked )? '' : card.value + "" +card.suit}</td>;
                }) }
                 </tr>
                 </tbody>
             </table>
            </div>
            <div style={{height:"25vh"}}>
                <div>
                Place Bet: <input value={bet} onChange = {e => setBet(e)} type="number" width="20px"></input>
                <button disabled={bet<=0 || gamesOn || placeBetClicked} onClick = {placeBet} className="Button" style={{marginLeft: "10px"}}>Place Bet</button>
                </div>
                <div>
                {/* <div className="Coins"></div>
                <div className="Coins"></div>
                <div className="Coins"></div>
                <span>{bet}</span> */}
                </div>
            </div>
            <div style={{height:"30vh"}}>
            <p>Your Hand ({ player.points })</p>
                <table>
                    <tbody>
            <tr>
                { player.cards.map((card, i) => {
                    return <td className="Cards" key={i}>{card.value} {card.suit}</td>
                }) 
                }
            </tr>
            </tbody>
        </table>
            </div>
            </div>
            <div className="TableFooter">
                
                    <button disabled = {!gamesOn} onClick = {stay} className = "Button" style={{float: "left", marginLeft: "10%", marginRight:"10%"}}>STAY</button>
                    <button disabled = {gamesOn || !placeBetClicked } onClick = {startGame} className = "Button" style={{float: "left", marginLeft: "10%", marginRight:"10%"}}>DEAL</button>
                    <button disabled ={standClicked || !gamesOn} onClick = {hit} className = "Button" style={{float: "right", marginRight: "10%", marginLeft:"10%"}}>HIT</button>
                
            </div>
    </div>
    
    )
}

// export const Card: React.FC = (props) => {
//     const combo = (props.number) ? `${number}${suit}` : null;
//     const color = (suit === '♦' || suit === '♥') ? 'Card-red' : 'Card';
    
//     return (
//       <td>
//         <div className={color}>
//           { combo }
//         </div>
//       </td>
//     );
//   };