import { TestBed } from '@angular/core/testing';

import { Experimental66Service } from './experimental66.service';

describe('Experimental66Service', () => {
  let service: Experimental66Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental66Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
