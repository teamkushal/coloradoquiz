import { TestBed } from '@angular/core/testing';

import { Experimental3098Service } from './experimental3098.service';

describe('Experimental3098Service', () => {
  let service: Experimental3098Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3098Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
