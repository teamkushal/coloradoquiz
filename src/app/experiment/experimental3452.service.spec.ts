import { TestBed } from '@angular/core/testing';

import { Experimental3452Service } from './experimental3452.service';

describe('Experimental3452Service', () => {
  let service: Experimental3452Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3452Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
