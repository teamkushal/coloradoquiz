import { TestBed } from '@angular/core/testing';

import { Experimental3654Service } from './experimental3654.service';

describe('Experimental3654Service', () => {
  let service: Experimental3654Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3654Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
