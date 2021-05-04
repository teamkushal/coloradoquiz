import { TestBed } from '@angular/core/testing';

import { Experimental1519Service } from './experimental1519.service';

describe('Experimental1519Service', () => {
  let service: Experimental1519Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1519Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
