import { TestBed } from '@angular/core/testing';

import { Experimental3629Service } from './experimental3629.service';

describe('Experimental3629Service', () => {
  let service: Experimental3629Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3629Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
