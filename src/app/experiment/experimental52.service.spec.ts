import { TestBed } from '@angular/core/testing';

import { Experimental52Service } from './experimental52.service';

describe('Experimental52Service', () => {
  let service: Experimental52Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental52Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
