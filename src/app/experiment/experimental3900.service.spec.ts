import { TestBed } from '@angular/core/testing';

import { Experimental3900Service } from './experimental3900.service';

describe('Experimental3900Service', () => {
  let service: Experimental3900Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3900Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
