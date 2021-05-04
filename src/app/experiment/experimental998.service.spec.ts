import { TestBed } from '@angular/core/testing';

import { Experimental998Service } from './experimental998.service';

describe('Experimental998Service', () => {
  let service: Experimental998Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental998Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
