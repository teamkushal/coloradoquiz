import { TestBed } from '@angular/core/testing';

import { Experimental2431Service } from './experimental2431.service';

describe('Experimental2431Service', () => {
  let service: Experimental2431Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2431Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
