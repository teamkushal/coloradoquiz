import { TestBed } from '@angular/core/testing';

import { Experimental813Service } from './experimental813.service';

describe('Experimental813Service', () => {
  let service: Experimental813Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental813Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
