import { TestBed } from '@angular/core/testing';

import { Experimental3325Service } from './experimental3325.service';

describe('Experimental3325Service', () => {
  let service: Experimental3325Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3325Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
