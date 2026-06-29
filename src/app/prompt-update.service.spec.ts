import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';

import { PromptUpdateService } from './prompt-update.service';

describe('PromptUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: SwUpdate, useValue: { isEnabled: false } }],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(PromptUpdateService);
    expect(service).toBeTruthy();
  });
});
