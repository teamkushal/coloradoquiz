import { TestBed } from '@angular/core/testing';

import { Experimental3420Service } from './experimental3420.service';

describe('Experimental3420Service', () => {
  let service: Experimental3420Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3420Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
