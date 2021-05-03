import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent923Component } from './test-component923.component';

describe('TestComponent923Component', () => {
  let component: TestComponent923Component;
  let fixture: ComponentFixture<TestComponent923Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent923Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
