class Player {
  constructor() {
    var heightmain = document.getElementById("player");
    heightmain.style.height = screen.height + "px";
    if (screen.width < 500) {
      heightmain.style.width = screen.width + "px";
    }
    var heightDiv = document.getElementById("content");
    heightDiv.style.height = screen.height - 300 + "px";
  }
}
onload = new Player();

class Audio_player {
  constructor() {
    this.audio_file = document.getElementById("audio_file");
    this.title_audio = document.getElementById("title_radio");
    // this.isPlayed;
    this.play_pause_button = document.getElementById("play_pause");
    this.isPlayed;
    this.play_pause_button.addEventListener("click", () => {
      this.play_pause();
    });
    // this.play_pause();

    this.names_radio = [];
    this.names_radio[0] = "quran";
    this.names_radio[1] = "RADIO Egypt";
    this.names_radio[2] = "RADIO Algeria";

    this.source_audio = [];
    this.source_audio[0] = "audio/018.mp3";
    this.source_audio[1] = "https://9090streaming.mobtada.com/9090FMEGYPT";
    this.source_audio[2] = "https://webradio.tda.dz/TiziOuzou_64K.mp3";
    this.server = 0;

    this.setResource();

    document.getElementById("next").addEventListener("click", () => {
      if (this.server < this.source_audio.length - 1) {
        ++this.server;
        this.isPlayed = false;
      } else {
        this.server = 0;
      }
      localStorage.setItem("save-position", this.server);
      this.setResource();
    });

    document.getElementById("back").addEventListener("click", () => {
      if (this.server > 0) {
        --this.server;
        this.isPlayed = false;
      } else {
        this.server = this.source_audio.length - 1;
      }
      localStorage.setItem("save-position", this.server);
      this.setResource();
    });
  }

  setResource() {
    if (localStorage.getItem("save-position") != null) {
      this.server = localStorage.getItem("save-position");
    }
    this.audio_file.src = this.source_audio[this.server];
    this.title_audio.innerHTML = this.names_radio[this.server];
    this.play_pause();
  }
  play_pause() {
    if (this.isPlayed == false) {
      this.play_pause_button.src = "img/pause.png";
      this.audio_file.play();
      this.isPlayed = true;
    } else {
      this.play_pause_button.src = "img/play.png";
      this.audio_file.pause();
      this.isPlayed = false;
    }
  }
}
onload = new Audio_player();
