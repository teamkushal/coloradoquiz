import { TestBed } from '@angular/core/testing';

import { Experimental3003Service } from './experimental3003.service';

describe('Experimental3003Service', () => {
  let service: Experimental3003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
