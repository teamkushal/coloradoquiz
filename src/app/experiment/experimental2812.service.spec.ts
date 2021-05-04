import { TestBed } from '@angular/core/testing';

import { Experimental2812Service } from './experimental2812.service';

describe('Experimental2812Service', () => {
  let service: Experimental2812Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2812Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
