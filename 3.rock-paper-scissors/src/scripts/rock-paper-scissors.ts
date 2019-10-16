export class RockPaperScissors {
  public constructor() {}
  public startGame(
    optionsButtons: NodeList,
    resultElement: HTMLElement | any,
    cpuMoveElement: HTMLElement | any,
    userMoveElement: HTMLElement | any,
    animationContainer: HTMLElement | any
  ) {
    optionsButtons.forEach(option => {
      option.addEventListener('click', (el: any) => {
        console.log(el);
        const cpuMove = this.cpuMove();
        let userMove = Number(el.target.value);
        animationContainer.addEventListener('animationend', (el: any) => {
          el.target.style.animation = "";
        }, false);
        animationContainer.style.animation = 'shake 2s ease';
        setTimeout(() => {
          resultElement.innerText = this.getNameResult(this.getResult(userMove, cpuMove));
          cpuMoveElement.src = `img/${this.getNameMove(cpuMove)}.png`;
          userMoveElement.src = `img/${this.getNameMove(userMove)}.png`;
        }, 2000);
      }, false);
    });
  }

  private getResult(user: number, cpu: number) {
    const options = [[0, 1, -1], [-1, 0, 1], [1, -1, 0]];
    return Number(options[cpu][user]) ;
  }

  private cpuMove() {
    return Math.floor(Math.random() * 3);
  }

  private getNameMove(move: number) {
    return move === 0 ? 'rock' : move === 1 ? 'paper' : 'scissors';
  }

  private getNameResult(res: number) {
    return res === 0 ? 'Empate 😅' : res === 1 ? 'Ganaste 💪' : 'Perdiste 😭';
  }
}
