import { TestBed } from '@angular/core/testing';

import { Experimental725Service } from './experimental725.service';

describe('Experimental725Service', () => {
  let service: Experimental725Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental725Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
