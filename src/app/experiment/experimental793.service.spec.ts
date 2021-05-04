import { TestBed } from '@angular/core/testing';

import { Experimental793Service } from './experimental793.service';

describe('Experimental793Service', () => {
  let service: Experimental793Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental793Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
