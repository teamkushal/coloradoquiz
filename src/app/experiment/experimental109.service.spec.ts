import { TestBed } from '@angular/core/testing';

import { Experimental109Service } from './experimental109.service';

describe('Experimental109Service', () => {
  let service: Experimental109Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental109Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
