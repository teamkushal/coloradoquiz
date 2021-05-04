import { TestBed } from '@angular/core/testing';

import { Experimental3220Service } from './experimental3220.service';

describe('Experimental3220Service', () => {
  let service: Experimental3220Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3220Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
