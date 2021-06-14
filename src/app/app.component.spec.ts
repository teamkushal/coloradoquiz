import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwUpdate } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { PromptUpdateService } from './prompt-update.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        LoadingComponent
      ],
      providers: [
        PromptUpdateService,
        SwUpdate,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
