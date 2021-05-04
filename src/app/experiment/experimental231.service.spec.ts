import { TestBed } from '@angular/core/testing';

import { Experimental231Service } from './experimental231.service';

describe('Experimental231Service', () => {
  let service: Experimental231Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental231Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
