import { TestBed } from '@angular/core/testing';

import { Experimental412Service } from './experimental412.service';

describe('Experimental412Service', () => {
  let service: Experimental412Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental412Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
