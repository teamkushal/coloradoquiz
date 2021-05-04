import { TestBed } from '@angular/core/testing';

import { Experimental1824Service } from './experimental1824.service';

describe('Experimental1824Service', () => {
  let service: Experimental1824Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1824Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
