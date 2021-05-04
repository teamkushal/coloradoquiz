import { TestBed } from '@angular/core/testing';

import { Experimental3589Service } from './experimental3589.service';

describe('Experimental3589Service', () => {
  let service: Experimental3589Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3589Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
