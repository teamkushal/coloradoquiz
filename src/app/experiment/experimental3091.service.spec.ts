import { TestBed } from '@angular/core/testing';

import { Experimental3091Service } from './experimental3091.service';

describe('Experimental3091Service', () => {
  let service: Experimental3091Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3091Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
