import { TestBed } from '@angular/core/testing';

import { Experimental3947Service } from './experimental3947.service';

describe('Experimental3947Service', () => {
  let service: Experimental3947Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3947Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
