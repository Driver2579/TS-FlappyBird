export class GameOverModal {
    modal;
    currentScoreElement;
    restartButton;
    constructor() {
        this.modal = document.getElementById('game-over-modal');
        this.currentScoreElement = document.getElementById('current-score');
        this.restartButton = document.getElementById('restart-button');
        if (this.modal) {
            this.modal.style.display = 'none';
        }
        this.restartButton?.addEventListener('click', this.restartGame);
    }
    show(currentScore) {
        if (this.modal && this.currentScoreElement) {
            this.currentScoreElement.textContent = currentScore.toString();
            this.modal.style.display = 'flex';
        }
    }
    restartGame = () => {
        location.reload();
    };
}
