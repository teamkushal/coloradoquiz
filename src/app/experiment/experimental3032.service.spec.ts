import { TestBed } from '@angular/core/testing';

import { Experimental3032Service } from './experimental3032.service';

describe('Experimental3032Service', () => {
  let service: Experimental3032Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3032Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
