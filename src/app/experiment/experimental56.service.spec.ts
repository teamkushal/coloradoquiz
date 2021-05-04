import { TestBed } from '@angular/core/testing';

import { Experimental56Service } from './experimental56.service';

describe('Experimental56Service', () => {
  let service: Experimental56Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental56Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
