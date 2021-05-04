import { TestBed } from '@angular/core/testing';

import { Experimental369Service } from './experimental369.service';

describe('Experimental369Service', () => {
  let service: Experimental369Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental369Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
