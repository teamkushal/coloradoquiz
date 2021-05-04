import { TestBed } from '@angular/core/testing';

import { Experimental641Service } from './experimental641.service';

describe('Experimental641Service', () => {
  let service: Experimental641Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental641Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
