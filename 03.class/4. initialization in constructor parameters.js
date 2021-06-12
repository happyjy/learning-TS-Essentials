"use strict";
/*
  # 4. initialization in constructor parameters
    * [point1] 프로퍼티 설정방법 2
      프로퍼티 설정방법 1 처럼 this에 프로퍼티 값에 접근해 할당하는 방식을, 접근제한자 설정으로 대체 할 수 있다.

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
var Person4Klass = /** @class */ (function () {
    // property
    // public name: string = "HyunA";
    // private age: number;
    // constructor 
    // 프로퍼티 설정방법 1
    // public constructor( name: string,  age: number){  
    //   this.name = name;
    //   this.age = age;
    // }
    /*
      [point1] 프로퍼티 설정방법 2
      프로퍼티 설정방법 1 처럼 this에 프로퍼티 값에 접근해 할당하는 방식을, 접근제한자 설정으로 대체 할 수 있다.
    */
    function Person4Klass(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    Person4Klass.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promise, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                // this.age = 100;
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
    return Person4Klass;
}());
var classP4_1 = new Person4Klass("Jyoon", 33);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("비동기 테스트");
                return [4 /*yield*/, classP4_1.init()];
            case 1:
                result = _a.sent();
                console.log("비동기 테스트 > classP3_1: ", classP4_1);
                console.log("비동기 테스트 > result: ", result);
                return [2 /*return*/];
        }
    });
}); })();
console.log(classP4_1);
// console.log(classP3_2.age); // age 프로퍼티 접근 불가(private으로 선언됨.)
