import { TestBed } from '@angular/core/testing';

import { Experimental992Service } from './experimental992.service';

describe('Experimental992Service', () => {
  let service: Experimental992Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental992Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
