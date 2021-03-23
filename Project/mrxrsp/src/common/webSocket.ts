class WebSocketWrapper {
    socket: WebSocket | null

    socketURL: string

    queue: string[]

    socketMessage: string|null

    constructor() {
        this.socket = null;
        this.socketURL = `ws://${process.env.WS_URL}/ws`;
        this.queue = [];
        this.socketMessage = null;
    }

    private sliceEventMessage(message: string): void {
        this.socketMessage = message.slice(6, message.length);
    }

    public connect(): void {
        this.socket = new WebSocket(this.socketURL);
        this.socket.onopen = this.onopen.bind(this);
        this.socket.onclose = this.onclose.bind(this);
        this.socket.onmessage = this.onmessage.bind(this);
    }

    private onopen(): void {
        this.sendOfflineMessages();
    }

    private onclose(): void {
        setTimeout(() => {
            this.connect();
        }, 1000);
    }

    private onmessage(e: MessageEvent): void {
        const event = JSON.parse(e.data);
        const type = event.messageType;
        this.sliceEventMessage(type);

    }

    private sendOfflineMessages(): void {
        this.queue.forEach((message: string) => {
            this.socket?.send(message);
        });
        this.queue = [];
    }

    public send(message: string): void {
        if (this.socket?.readyState !== 1) {
            this.queue.push(message);
            return;
        }
        this.sendOfflineMessages();
        this.socket.send(message);
    }
}
export default WebSocketWrapper;