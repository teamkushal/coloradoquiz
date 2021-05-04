import { TestBed } from '@angular/core/testing';

import { Experimental3882Service } from './experimental3882.service';

describe('Experimental3882Service', () => {
  let service: Experimental3882Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3882Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
