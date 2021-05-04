import { TestBed } from '@angular/core/testing';

import { Experimental3758Service } from './experimental3758.service';

describe('Experimental3758Service', () => {
  let service: Experimental3758Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3758Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
