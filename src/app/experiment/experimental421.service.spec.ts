import { TestBed } from '@angular/core/testing';

import { Experimental421Service } from './experimental421.service';

describe('Experimental421Service', () => {
  let service: Experimental421Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental421Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
