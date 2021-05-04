import { TestBed } from '@angular/core/testing';

import { Experimental245Service } from './experimental245.service';

describe('Experimental245Service', () => {
  let service: Experimental245Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental245Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
