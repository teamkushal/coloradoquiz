import { TestBed } from '@angular/core/testing';

import { Experimental3760Service } from './experimental3760.service';

describe('Experimental3760Service', () => {
  let service: Experimental3760Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3760Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
