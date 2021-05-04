import { TestBed } from '@angular/core/testing';

import { Experimental24Service } from './experimental24.service';

describe('Experimental24Service', () => {
  let service: Experimental24Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental24Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
