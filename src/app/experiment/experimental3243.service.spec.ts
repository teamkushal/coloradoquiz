import { TestBed } from '@angular/core/testing';

import { Experimental3243Service } from './experimental3243.service';

describe('Experimental3243Service', () => {
  let service: Experimental3243Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3243Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
