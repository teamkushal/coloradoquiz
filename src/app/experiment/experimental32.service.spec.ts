import { TestBed } from '@angular/core/testing';

import { Experimental32Service } from './experimental32.service';

describe('Experimental32Service', () => {
  let service: Experimental32Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental32Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
