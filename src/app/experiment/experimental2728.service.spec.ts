import { TestBed } from '@angular/core/testing';

import { Experimental2728Service } from './experimental2728.service';

describe('Experimental2728Service', () => {
  let service: Experimental2728Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2728Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
