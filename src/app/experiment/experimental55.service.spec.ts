import { TestBed } from '@angular/core/testing';

import { Experimental55Service } from './experimental55.service';

describe('Experimental55Service', () => {
  let service: Experimental55Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental55Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
