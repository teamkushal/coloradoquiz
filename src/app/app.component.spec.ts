import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { PromptUpdateService } from './prompt-update.service';
import { IpinfoService } from './ipinfo.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
      ],
      declarations: [
        AppComponent,
        LoadingComponent
      ],
      providers: [
        PromptUpdateService,
        SwUpdate,
        IpinfoService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
