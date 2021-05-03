import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1782Component } from './test-component1782.component';

describe('TestComponent1782Component', () => {
  let component: TestComponent1782Component;
  let fixture: ComponentFixture<TestComponent1782Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1782Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
