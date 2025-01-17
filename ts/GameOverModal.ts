export class GameOverModal {
    private readonly modal: HTMLElement | null;
    private readonly currentScoreElement: HTMLElement | null;
    private restartButton: HTMLElement | null;

    constructor() {
        this.modal = document.getElementById('game-over-modal');
        this.currentScoreElement = document.getElementById('current-score');
        this.restartButton = document.getElementById('restart-button');

        if (this.modal) {
            this.modal.style.display = 'none';
        }

        this.restartButton?.addEventListener('click', this.restartGame);
    }

    public show(currentScore: number): void {
        if (this.modal && this.currentScoreElement) {
            this.currentScoreElement.textContent = currentScore.toString();

            this.modal.style.display = 'flex';
        }
    }

    private restartGame = (): void => {
        location.reload();
    }
}

