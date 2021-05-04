import { TestBed } from '@angular/core/testing';

import { Experimental3498Service } from './experimental3498.service';

describe('Experimental3498Service', () => {
  let service: Experimental3498Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3498Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
