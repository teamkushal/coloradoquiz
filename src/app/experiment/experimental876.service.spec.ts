import { TestBed } from '@angular/core/testing';

import { Experimental876Service } from './experimental876.service';

describe('Experimental876Service', () => {
  let service: Experimental876Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental876Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
