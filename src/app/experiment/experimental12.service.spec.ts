import { TestBed } from '@angular/core/testing';

import { Experimental12Service } from './experimental12.service';

describe('Experimental12Service', () => {
  let service: Experimental12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
