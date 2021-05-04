import { TestBed } from '@angular/core/testing';

import { Experimental852Service } from './experimental852.service';

describe('Experimental852Service', () => {
  let service: Experimental852Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental852Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
