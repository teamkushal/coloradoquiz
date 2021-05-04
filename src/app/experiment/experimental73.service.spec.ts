import { TestBed } from '@angular/core/testing';

import { Experimental73Service } from './experimental73.service';

describe('Experimental73Service', () => {
  let service: Experimental73Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental73Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
