import { TestBed } from '@angular/core/testing';

import { Experimental3331Service } from './experimental3331.service';

describe('Experimental3331Service', () => {
  let service: Experimental3331Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3331Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
