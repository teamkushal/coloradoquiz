import { TestBed } from '@angular/core/testing';

import { Experimental3745Service } from './experimental3745.service';

describe('Experimental3745Service', () => {
  let service: Experimental3745Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3745Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
