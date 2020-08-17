import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.data = null;
    }
    ConfigService.prototype.set = function (data) {
        this.data = data;
    };
    ConfigService.prototype.get = function (key) {
        return this.data[key];
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
    ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
    return ConfigService;
}());
export { ConfigService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlYXBpLXByb3h5LyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7UUFFVSxTQUFJLEdBQVcsSUFBSSxDQUFDO0tBUzdCO0lBUEMsMkJBQUcsR0FBSCxVQUFJLElBQUk7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs4RUFUVSxhQUFhO3lEQUFiLGFBQWEsV0FBYixhQUFhO3dCQUgxQjtDQWFDLEFBWEQsSUFXQztTQVZZLGFBQWE7a0RBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgZGF0YTogT2JqZWN0ID0gbnVsbDtcblxuICBzZXQoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQoa2V5OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gIH1cbn1cbiJdfQ==