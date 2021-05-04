import { TestBed } from '@angular/core/testing';

import { Experimental210Service } from './experimental210.service';

describe('Experimental210Service', () => {
  let service: Experimental210Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental210Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
