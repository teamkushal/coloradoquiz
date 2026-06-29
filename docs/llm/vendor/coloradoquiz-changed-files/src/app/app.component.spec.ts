import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HandleUnrecoverableStateService } from './handle-unrecoverable-state.service';
import { IpinfoService } from './ipinfo.service';
import { PromptUpdateService } from './prompt-update.service';

describe('AppComponent', () => {
  const ipInfo = { getIpAddress: vi.fn(() => of({ ip: '203.0.113.1', country: 'US' })) };
  const promptUpdate = { checkForUpdates: vi.fn() };

  beforeEach(async () => {
    ipInfo.getIpAddress.mockClear();
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: IpinfoService, useValue: ipInfo },
        { provide: PromptUpdateService, useValue: promptUpdate },
        { provide: HandleUnrecoverableStateService, useValue: {} },
      ],
    }).compileComponents();
  });

  it('creates the root component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('fetches and caches IP information when none is stored', () => {
    TestBed.createComponent(AppComponent);
    expect(ipInfo.getIpAddress).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem('ipInformation')).not.toBeNull();
  });

  it('does not fetch IP information when it is already cached', () => {
    localStorage.setItem('ipInformation', JSON.stringify({ ip: 'cached' }));
    TestBed.createComponent(AppComponent);
    expect(ipInfo.getIpAddress).not.toHaveBeenCalled();
  });
});
