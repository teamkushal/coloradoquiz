import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent434Component } from './test-component434.component';

describe('TestComponent434Component', () => {
  let component: TestComponent434Component;
  let fixture: ComponentFixture<TestComponent434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent434Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
