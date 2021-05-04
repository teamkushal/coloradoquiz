import { TestBed } from '@angular/core/testing';

import { Experimental3867Service } from './experimental3867.service';

describe('Experimental3867Service', () => {
  let service: Experimental3867Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3867Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
