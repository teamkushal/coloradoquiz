import { TestBed } from '@angular/core/testing';

import { Experimental375Service } from './experimental375.service';

describe('Experimental375Service', () => {
  let service: Experimental375Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental375Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
