import { TestBed } from '@angular/core/testing';

import { Experimental1654Service } from './experimental1654.service';

describe('Experimental1654Service', () => {
  let service: Experimental1654Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1654Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
