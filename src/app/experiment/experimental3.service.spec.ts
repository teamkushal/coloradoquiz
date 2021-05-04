import { TestBed } from '@angular/core/testing';

import { Experimental3Service } from './experimental3.service';

describe('Experimental3Service', () => {
  let service: Experimental3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
