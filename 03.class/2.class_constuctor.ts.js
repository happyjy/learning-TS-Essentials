"use strict";
/*
  # 생성자 관련 내용

  * [point1] 아래 strict 관련 option을 true로 하면 age의 값이 초기화해야한다고 error을 발생한다.
    * "strictNullChecks": true,                    /* Enable strict null
    * "strictPropertyInitialization": true,        /* Enable strict checking
  * [point2] ! 설정이란?
    * age!: number; 이렇게 설정을한다면
    * const classP2: Person2Klass = new Person2Klass();
      * classP2.age = 100;을 통해서 값을 입력가능하게 하는 옵션이다.
  * [point3] constructor에 async를 사용할 수 없다.
    * 만약 비동기 처리를 해주고 싶다면 constructor가 아닌 다른 함수를 호출하면서 구현해주면 되겠다.
    * eg) await classP2_1.init();
    * ! 설정과같이 생각해야할것이 age가 만약에 constructor가 아니라 비동기에 의해서 나중에 설정이 된다고 할때
      * 이때 age!: number라고 설정해주면 되겠다.
    * [async&promise, await](https://javascript.info/async-await#await)
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Person2Klass = /** @class */ (function () {
    function Person2Klass(age) {
        /* property 선언 */
        this.name = "HyunA";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    // [point3] constructor에 async를 사용할 수 없다.
    Person2Klass.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promise, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                _this.age = 100;
                                resolve("done");
                            }, 1000);
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return Person2Klass;
}());
var classP2_1 = new Person2Klass(32);
var classP2_2 = new Person2Klass();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("비동기 테스트");
                return [4 /*yield*/, classP2_1.init()];
            case 1:
                result = _a.sent();
                console.log("비동기 테스트 > classP2_1: ", classP2_1);
                console.log("비동기 테스트 > result: ", result);
                return [2 /*return*/];
        }
    });
}); })();
// const classP2: Person2 = new Person2();
console.log(classP2_1);
console.log(classP2_2);
