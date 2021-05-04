import { TestBed } from '@angular/core/testing';

import { Experimental2813Service } from './experimental2813.service';

describe('Experimental2813Service', () => {
  let service: Experimental2813Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2813Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
