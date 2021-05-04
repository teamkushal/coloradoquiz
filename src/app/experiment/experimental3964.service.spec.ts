import { TestBed } from '@angular/core/testing';

import { Experimental3964Service } from './experimental3964.service';

describe('Experimental3964Service', () => {
  let service: Experimental3964Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3964Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
