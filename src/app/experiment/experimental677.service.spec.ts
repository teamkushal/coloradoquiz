import { TestBed } from '@angular/core/testing';

import { Experimental677Service } from './experimental677.service';

describe('Experimental677Service', () => {
  let service: Experimental677Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental677Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
