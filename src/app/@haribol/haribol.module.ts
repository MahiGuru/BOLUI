import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { HARIBOL_CONFIG } from './services/config.service';

@NgModule()
export class HariBolModule
{
    constructor(@Optional() @SkipSelf() parentModule: HariBolModule)
    {
        if ( parentModule )
        {
            throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : HariBolModule,
            providers: [
                {
                    provide : HARIBOL_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
