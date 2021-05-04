import { TestBed } from '@angular/core/testing';

import { Experimental3574Service } from './experimental3574.service';

describe('Experimental3574Service', () => {
  let service: Experimental3574Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3574Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
