"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bot_service_1 = require("../bot/bot.service");
const weather_service_1 = require("../weather/weather.service");
function isEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}
let AuthService = exports.AuthService = class AuthService {
    constructor(botService, weatherService) {
        this.botService = botService;
        this.weatherService = weatherService;
        this.bot = this.botService.getBotInstance();
        this.start = () => {
            this.bot.once('message', (msg) => {
                const chatId = msg.chat.id;
                this.bot.sendMessage(chatId, "Welcome to Tarun NIT Weather Bot. Type exit to exit any process at any time.");
                setTimeout(() => {
                    this.bot.sendMessage(chatId, "May I know, are you a user or admin?");
                }, 500);
                this.bot.once('message', (msg) => {
                    const chatId = msg.chat.id;
                    if (msg.text.trim().toLowerCase() === "user") {
                        this.handleSignup(chatId, msg);
                    }
                    else if (msg.text.trim().toLowerCase() === "admin") {
                        this.Login(chatId, msg);
                    }
                    else if (msg.text.trim().toLowerCase() === "exit") {
                        this.bot.sendMessage(chatId, "You have successfully exited. Type something to continue again");
                        this.start();
                    }
                    else if (msg.text) {
                        this.bot.sendMessage(chatId, "Sorry, I did not understand");
                        this.start();
                    }
                });
            });
        };
        this.fetchWeather = async (chatId) => {
            try {
                this.bot.sendMessage(chatId, "Enter the name of the city weather of which you want to know.");
                this.bot.once('message', async (msg) => {
                    if (msg.text.trim().toLowerCase() === "exit") {
                        this.bot.sendMessage(chatId, "You have successfully exited. Type something to continue again");
                        this.start();
                        return;
                    }
                    const response = await this.weatherService.fetchWeather(msg.text);
                    const result = await response.json();
                    if (response.ok) {
                        this.bot.sendMessage(chatId, `City: ${result.name}\nTemperature: ${result.main.temp}°C\nWeather: ${result.weather[0].main}`);
                        setTimeout(() => {
                            this.fetchWeather(chatId);
                        }, 500);
                    }
                    else {
                        this.bot.sendMessage(chatId, "Such city does not exist");
                        setTimeout(() => {
                            this.fetchWeather(chatId);
                        }, 500);
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.signup = async (chatId, obj) => {
            try {
                const response = await fetch('https://weatherbotapi.onrender.com/user', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify(obj),
                });
                if (response.status === 201) {
                    this.bot.sendMessage(chatId, "Subscription Successful!");
                    setTimeout(() => {
                        this.fetchWeather(chatId);
                    }, 500);
                }
                else {
                    this.bot.sendMessage(chatId, `Thanks for visiting again ${obj["name"]}`);
                    setTimeout(() => {
                        this.fetchWeather(chatId);
                    }, 500);
                }
            }
            catch (error) {
                this.bot.sendMessage(chatId, "Error occurred during signup. Please try again later.");
                this.start();
                console.log(error);
            }
        };
        this.handleSignup = (chatId, msg) => {
            this.bot.sendMessage(chatId, "May I know your name please?");
            this.bot.once('message', (nameMsg) => {
                const name = nameMsg.text.trim();
                if (name.trim().toLowerCase() === "exit") {
                    this.bot.sendMessage(chatId, "You have successfully exited. Type something to continue again");
                    this.start();
                }
                else if (name.split(' ').length === 1 || name.split(' ').length === 2) {
                    const obj = { name };
                    this.bot.sendMessage(chatId, "May I know your email please?");
                    this.bot.once('message', (emailMsg) => {
                        const email = emailMsg.text.trim();
                        if (email.trim().toLowerCase() === "exit") {
                            this.bot.sendMessage(chatId, "You have successfully exited. Type something to continue again");
                            this.start();
                        }
                        else if (isEmail(email)) {
                            obj["email"] = email;
                            this.signup(chatId, obj);
                        }
                        else {
                            this.bot.sendMessage(chatId, "Invalid Email. Please enter your details again");
                            setTimeout(() => {
                                this.handleSignup(chatId, msg);
                            }, 500);
                        }
                    });
                }
                else {
                    this.bot.sendMessage(chatId, "Please enter either the firstname or the firstname and lastname");
                    setTimeout(() => {
                        this.handleSignup(chatId, msg);
                    }, 500);
                }
            });
        };
        this.handleLogin = (chatId, msg) => {
        };
        this.Login = async (chatId, msg) => {
            const message = `<a href="https://weatherbotapi.onrender.com/auth">Click here</a> to verify your google account`;
            this.bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
            setTimeout(() => {
                this.bot.sendMessage(chatId, "Waiting for the server response....");
            }, 500);
            setTimeout(async () => {
                try {
                    const response = await fetch('https://weatherbotapi.onrender.com/auth/google/callback', {
                        method: 'POST',
                        headers: {
                            "Content-type": "application/json",
                            "Accept": 'application/json'
                        }
                    });
                    const result = await response.json();
                    if (result.email) {
                        this.bot.sendMessage(chatId, `Welcome ${result.firstName}, You have successfully authorized`);
                        setTimeout(() => {
                            this.handleLogin(chatId, msg);
                        }, 500);
                    }
                    else {
                        this.bot.sendMessage(chatId, "You took too much time to authorize yourself.");
                        this.start();
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }, 15000);
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bot_service_1.BotService, weather_service_1.WeatherService])
], AuthService);
//# sourceMappingURL=auth.service.js.map